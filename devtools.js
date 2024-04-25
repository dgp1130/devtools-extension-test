chrome.devtools.panels.create(
    'DevTools Extension Test' /* title */,
    undefined /* iconPath */,
    '/panel.html' /* pagePath */,
    () => {
        console.log('Panel created!');
    },
);
