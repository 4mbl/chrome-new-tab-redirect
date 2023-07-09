"use strict";
var url = "https://example.com/";
if (url) {
  url = -1 === url.indexOf("://") ? "http://" + url : url;

  chrome.tabs.getCurrent(function (tab) {
    chrome.tabs.update(tab.id, {
      url: url,
      highlighted: true,
    });
  });
}
