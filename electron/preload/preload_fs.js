const fs = require("fs");
const path = require("path");

const parseFilePath = (filePath) => {
  try {
    return path.parse(filePath);
  } catch (err) {
    return null;
  }
};

const listFilesinDirectory = (directory) => {
  try {
    const files = fs.readdirSync(directory);
    return files;
  } catch (err) {
    return null;
  }
};

const readContentFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    return null;
  }
};

const writeContentToFile = (filePath, content) => {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  } catch (err) {
    return false;
  }
};

// TODO: Add ability to copy/move clip files.

module.exports = {
  parseFilePath,
  listFilesinDirectory,
  readContentFromFile,
  writeContentToFile,
};
