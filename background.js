chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "downloadImage" && message.url) {
      chrome.storage.local.get(['isDownloadEnabled', 'downloadCounter'], (result) => {
          if (result.isDownloadEnabled) {
              let counter = result.downloadCounter || 0;
              chrome.downloads.download({
                  url: message.url,
                  filename: `${counter}.jpg`
              });
              counter++;
              chrome.storage.local.set({ downloadCounter: counter });
          }
      });
  }
});
