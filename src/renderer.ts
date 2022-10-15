// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// import { IpcRenderer } from "electron";
// import electron = require("electron");

// var ipc:IpcRenderer = electron.ipcRenderer

console.log("I'm renderer and there is nothing u can do about it!");

document.getElementById('start').addEventListener('click', _ =>{
    console.log('Started was clicked!!!');
    // ipc.send('start-clicked');
    window.electron.startPressed("aleluja");
});     
