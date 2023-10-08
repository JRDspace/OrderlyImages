const toggleDownload = document.getElementById('toggleDownload');
chrome.storage.local.get('isDownloadEnabled', (result) => {
    toggleDownload.checked = result.isDownloadEnabled || false;
});
toggleDownload.addEventListener('change', () => {
    chrome.storage.local.set({ isDownloadEnabled: toggleDownload.checked });
});
const resetButton = document.getElementById('resetCounter');

resetButton.addEventListener('click', () => {
    chrome.storage.local.set({ downloadCounter: 0 }, () => {
        alert('Counter reset to 0!');
    });
});
