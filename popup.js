function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      setStatus("Copied to clipboard!");
      setTimeout(() => {
        setStatus("");
      }, 2000);
    })
    .catch((err) => {
      setStatus("Failed to copy: " + err);
    });
}

const status = document.getElementById("status");

function setStatus(msg) {
  status.textContent = msg;
}

// Function to display keys from storage
function displaySavedKeys() {
  chrome.storage.local.get(["key1", "key2"], (data) => {
    if (data.key1 || data.key2) {
      const key1 = data.key1 || "Not found";
      const key2 = data.key2 || "Not found";

      document.getElementById("key1").textContent = key1;
      document.getElementById("key2").textContent = key2;

      // Add copy functionality to spans
      document.getElementById("copy-key1").onclick = () =>
        copyToClipboard(key1);
      document.getElementById("copy-key2").onclick = () =>
        copyToClipboard(key2);

      setStatus("Displaying saved keys.");
    } else {
      setStatus("No saved keys found. Click 'Fetch Keys' to retrieve them.");
    }
  });
}

function fetchKeys() {
  setStatus("Fetching keys...");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "readLocalStorage" },
      (response) => {
        if (response) {
          const key1 = response?.key1 || "Not found";
          const key2 = response?.key2 || "Not found";

          document.getElementById("key1").textContent = key1;
          document.getElementById("key2").textContent = key2;

          // Add copy functionality to spans
          document.getElementById("copy-key1").onclick = () =>
            copyToClipboard(key1);
          document.getElementById("copy-key2").onclick = () =>
            copyToClipboard(key2);

          // Save keys to extension storage
          chrome.storage.local.set(
            { key1: response.key1, key2: response.key2 },
            () => {
              setStatus("Keys fetched and saved successfully.");
            }
          );
        } else {
          setStatus("Failed to read keys from current tab.");
        }
      }
    );
  });
}

// When popup loads, display any saved keys
document.addEventListener("DOMContentLoaded", displaySavedKeys);

// Fetch keys button
document.getElementById("fetchBtn").addEventListener("click", fetchKeys);

// Original copy button now just refreshes keys
document.getElementById("copyBtn").addEventListener("click", fetchKeys);

document.getElementById("pasteBtn").addEventListener("click", () => {
  chrome.storage.local.get(["key1", "key2"], (data) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "writeLocalStorage", data },
        (response) => {
          if (response?.status === "written") {
            setStatus("Keys pasted to tab localStorage.");
          } else {
            setStatus("Paste failed.");
          }
        }
      );
    });
  });
});
