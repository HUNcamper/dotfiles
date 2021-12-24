$('input[type=radio][name=quality]').change(function(e) {
    chrome.storage.local.set({quality: e.target.value}, function() {
		chrome.tabs.query({url: ["*://*.hbogo.hu/*",
								"*://*.hbogo.cz/*",
								"*://*.hbogo.sk/*",
								"*://*.hbogo.ro/*",
								"*://*.hbogo.pl/*",
								"*://*.hbogo.hr/*",
								"*://*.hbogo.rs/*",
								"*://*.hbogo.si/*",
								"*://*.hbogo.mk/*",
								"*://*.hbogo.me/*",
								"*://*.hbogo.bg/*",
								"*://*.hbogo.ba/*"]}, function(result) {
			result.forEach(function(el) {
				chrome.tabs.reload(el.id);
			});
		});
		window.close();
	});
});

chrome.storage.local.get(['quality'], function(result) {
	var quality = (result.quality ? result.quality : 1080);
	$('input[type=radio][value='+quality+']').prop("checked", true);
});