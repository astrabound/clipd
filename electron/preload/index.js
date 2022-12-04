const { contextBridge } = require("electron");
const {
  parseFilePath,
  listFilesinDirectory,
  writeContentToFile,
  readContentFromFile,
} = require("./preload_fs");

contextBridge.exposeInMainWorld("fs", {
  parseFilePath,
  listFilesinDirectory,
  writeContentToFile,
  readContentFromFile,
});
