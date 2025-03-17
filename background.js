let hidden = false;

chrome.action.onClicked.addListener((tab) => {
    hidden = !hidden; // Toggle state

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (shouldHide) => {
            document.querySelectorAll('s, del, strike, [style*="line-through"]').forEach(el => {
                el.style.display = shouldHide ? 'none' : '';
            });
        },
        args: [hidden]
    });
});