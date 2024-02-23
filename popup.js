document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-button");

  checkButton.addEventListener("click", function () {
    console.log("Clicked Button");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("Got ActiveTab");
      console.log(tabs[0].url);
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      });
      console.log("Executing Script");
    });
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Listening");
  if (message.poreCloggingIngredientFound) {
    console.log("Got a poreclogging ingredient - popup.js");
    // const checkButton = document.getElementById("check-button");
    // checkButton.style.color = "red";
    // document.getElementById("check-button").style.background = "red";
    document.getElementById("product-name").innerHTML = message.productName;
    document.getElementById("product-name").style.color = "red";
  } else {
    document.getElementById("product-name").innerHTML = message.productName;
    document.getElementById("product-name").style.color = "#2a6159";
  }
});
