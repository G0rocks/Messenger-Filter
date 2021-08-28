console.log("filterMessenger start");

// Check if current tab is messenger.com

// Check if filtering messenger is turned ON or OFF

// Get DOM

console.log("Popup DOM fully loaded and parsed");

function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    console.log('Tab script:');
    console.log(document.body);
    return document.body.innerHTML;
}

//We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
chrome.tabs.executeScript({
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
}, (results) => {
    //Here we have just the innerHTML and not DOM structure
    console.log('Popup script:')
    console.log(results[0]);
});

// Remove read messages

console.log("filterMessenger end");