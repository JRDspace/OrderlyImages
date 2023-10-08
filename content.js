document.addEventListener("mouseover", function(event) {
  if (event.target.tagName.toLowerCase() === 'img') {
      const imageUrl = event.target.src;
          if (chrome && chrome.runtime && typeof chrome.runtime.sendMessage === 'function') {
            chrome.runtime.sendMessage({
                action: "downloadImage",
                url: imageUrl
            });
        } else {
            console.error('chrome.runtime.sendMessage is not available');
        }
  }
});
