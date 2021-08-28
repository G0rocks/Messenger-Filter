console.log("Background.js start");

let currentTab = null;
 
browser.tabs.onActivated.addListener((event) => currentTab = event.tabId);

console.log("Background.js finished executing");