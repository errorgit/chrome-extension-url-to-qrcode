chrome.tabs.onSelectionChanged.addListener(function(tabID, selectInfo){
    chrome.tabs.getSelected(null, function(tab){
        window.href = tab.url;
    })
});
chrome.tabs.onUpdated.addListener(function(tabID, selectInfo){
    chrome.tabs.getSelected(null, function(tab){
        window.href = tab.url;
    })
});