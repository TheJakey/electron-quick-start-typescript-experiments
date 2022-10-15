const { contextBridge, ipcRenderer } = require('electron');

console.log("preload was loaded");

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.0
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type as keyof NodeJS.ProcessVersions]);
  }
});

contextBridge.exposeInMainWorld('electron', {
  startPressed: (helloMessage: string) => {
    ipcRenderer.send('start-clicked', helloMessage);
  }
})