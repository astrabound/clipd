const fs = require("fs");

const readContentFromFile = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    return data;
  } catch (err) {
    return null;
  }
};

const writeContentToFile = (path, content) => {
  try {
    fs.writeFileSync(path, content, "utf8");
    return true;
  } catch (err) {
    return false;
  }
};

// TODO: Add ability to copy/move clip files.

module.exports = {
  readContentFromFile,
  writeContentToFile,
};
