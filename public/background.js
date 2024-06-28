// Listen for the browser action click event
chrome.action.onClicked.addListener(function() {
    // Open a new window with specified dimensions and scrolling enabled
    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 300,
      height: 300
    });
  });
  