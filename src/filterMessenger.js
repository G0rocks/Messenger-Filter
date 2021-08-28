const delay = ms => new Promise(res => setTimeout(res, ms));

async function filterMessenger_asyncFunc() {
  console.log("filterMessenger start");

  document.addEventListener('DOMContentLoaded', (event) => {
    console.log("This is executed after the page loads :)")
  })
  
  let pageLoaded = false;
  let messageBoxes = 0;
  
  console.log("Starting 5 second wait")

  await delay(5000);

  console.log("5 second wait over")

  try {
    // Get messageBox array
    //messageBoxes = document.getElementsByTagName("body")[0].childNodes[1].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes;
    messageBoxes = document.getElementsByTagName("body")[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes;
  
    pageLoaded = true;
    }
    catch(err) {
      console.error(err);
      pageLoaded = false;
  }
  
  console.log("Page loaded, starting filtration");
  
  // Check if filtering messenger is turned ON or OFF
  
  console.log("MessageBoxes: " + messageBoxes);
  
  // Loop through array of messageboxes
  let readChecker = 12  //If message is unread, we get 12 from the check in the for loop below.
  
  messageBoxes.forEach(function(currentValue, currentIndex, listObj) {
    console.log("Messageboxes index: " + currentIndex);
    try {
      if (readChecker == messageBoxes[currentIndex].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].clientWidth) {
        //Do nothing, the message is unread
      }
      else {
        //Remove message box
        messageBox[currentIndex].remove();
      }
    console.log(messageBoxes[currentIndex]);
    }
    catch(e) {
      //An error occures when we come accross some of the read messages so if this happens we remove the message box.
      messageBoxes[currentIndex].remove();
    }
  })
  
  for (let i = 0; i < messageBoxes.length; i++) { 
    // If message is already read, remove from DOM
    try {
      if (readChecker == messageBoxes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].clientWidth) {
        //Do nothing, the message is unread
      }
      else {
        //Remove message box
        messageBox[i].remove();
      }
    console.log(messageBoxes[i]);
    }
    catch(e) {
      //An error occures when we come accross some of the read messages so if this happens we remove the message box.
      messageBoxes[i].remove();
    }
  }
  
  console.log("filterMessenger end");
}

filterMessenger_asyncFunc();