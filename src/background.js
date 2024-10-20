// create context menu item
chrome.contextMenus.create({
  id: "main_page",
  title: "開發者網頁",
  onclick: () => {
    chrome.tabs.create({  
      url: chrome.runtime.getURL("src/main.html")
    });
  },
  contexts: ["browser_action"]
}, () => {});