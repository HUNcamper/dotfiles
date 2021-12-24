var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};


chrome.storage.local.get(['quality'], function(result) {
	
	console.log('Value currently is ' + result.quality);
	
	var actualCode = `
	var qualitySetting = ${ result.quality };
	`;
	
	var script = document.createElement('script');
	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.remove();	
});