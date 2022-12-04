const { contextBridge } = require("electron");
const { writeContentToFile, readContentFromFile } = require("./preload_fs");

contextBridge.exposeInMainWorld("fs", {
  writeContentToFile,
  readContentFromFile,
});
