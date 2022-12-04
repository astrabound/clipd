const { app, BrowserWindow } = require("electron");
const { platform } = require("node:process");
const path = require("node:path");

const createWindow = async () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload/index.js"),
    },
  });

  win.webContents.openDevTools();
  win.loadURL(`file://${path.join(__dirname, "preload.html")}`);

  setTimeout(() => {
    win.loadURL("http://localhost:3000");
  }, 5000);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});
