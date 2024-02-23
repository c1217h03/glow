chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message == "pore clogging ingredient found") {
    console.log("Got a poreclogging ingredient - background.js");
    chrome.runtime.sendMessage({
      poreCloggingIngredientFound: true,
      productName: request.productName,
    });
  } else if (request.message == "clean") {
    console.log("Clean Ingredients - background.js");
    chrome.runtime.sendMessage({
      poreCloggingIngredientFound: false,
      productName: request.productName,
    });
  }
});
