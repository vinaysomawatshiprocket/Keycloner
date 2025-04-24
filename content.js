chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "readLocalStorage") {
      const key1 = localStorage.getItem("satellizer_token");
      const key2 = localStorage.getItem("ngStorage-USER");
      sendResponse({ key1, key2 });
    }
  
    if (request.action === "writeLocalStorage") {
      const { key1, key2 } = request.data;
      localStorage.setItem("satellizer_token", key1);
      localStorage.setItem("ngStorage-USER", key2);
      sendResponse({ status: "written" });
    }
  
    return true;
  });
  