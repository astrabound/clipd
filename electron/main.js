const { app, BrowserWindow } = require("electron");
const { platform } = require("node:process");
const path = require("node:path");
const ext_installer = require("electron-devtools-installer");
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

app
  .whenReady()
  .then(() => {
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .then(() => {
    ext_installer
      .default(ext_installer.REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log("An error occurred: ", err));
  });

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});
