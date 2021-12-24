function removeRemainingQualities(xml) {
	
	var q = $($.parseXML(xml));
	
	var quality = (qualitySetting ? qualitySetting : 1080);
	
	if (!q.find('[Type="video"] > QualityLevel[MaxHeight="'+quality+'"]').length) {
		quality = q.find('[Type="video"] > QualityLevel[MaxHeight]')
			.filter(function () {
				return $(this).attr('MaxHeight') < quality;
			})
			.last()
			.attr('MaxHeight');
		if (!quality) {
			quality = q.find('[Type="video"] > QualityLevel[MaxHeight]')
				.first()
				.attr('MaxHeight');
		}
	}
	
	q.find('[Type="video"] > QualityLevel:not([MaxHeight="'+quality+'"])').remove();
	q.find('[Type="video"]').attr('QualityLevels', '1');
	
	return new XMLSerializer().serializeToString(q.get()[0]);
	
}

(function() {
	var proxiedOpen = window.XMLHttpRequest.prototype.open;
	window.XMLHttpRequest.prototype.open = function() {
		this.reqUrl = arguments[1];
		proxiedOpen.apply(this, [].slice.call(arguments));
	};
	
	var proxiedSend = window.XMLHttpRequest.prototype.send;
	window.XMLHttpRequest.prototype.send = function() {
		if (this.reqUrl.includes("manifest")) {
			var oldCallback = this.onload;
			this.onload = function() {
				
				var dec = new TextDecoder("utf-8");
				var modified = removeRemainingQualities(dec.decode(this.response));
				
				var enc = new TextEncoder();
				Object.defineProperty(this, 'response', {
					value: enc.encode(modified),
					writable: false
				});
				
				if (oldCallback) {
					oldCallback.apply(this, [].slice.call(arguments));
				}
			}
		}
		proxiedSend.apply(this, [].slice.call(arguments));
	};
})();