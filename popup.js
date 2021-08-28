import React from 'react';

console.log("Popup.js start");

//Check website, if messenger.com, run script, otherwise exit
let frames = null;
try {
  frames = await browser.webNavigation.getAllFrames({ 'tabId': currentTab});
} catch (error) {
  console.log(error);
}

console.log("Current tab test: " + currentTab);

let frame = frames.filter((frame) => frame.parentFrameId == -1)[0];

// Get DOM with webpage content

// Create a document which is identical to the first one except it contains no read messages and also might contain ads

// Show the webpage without read messages



console.log("Popup.js finished executing");