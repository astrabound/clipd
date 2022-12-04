import { FileInput } from "@blueprintjs/core";
import React from "react";
import { C_SETTINGS_VW } from "../../config/constants";

const DataSource = () => {
  const handleDatasourceChange = (e) => {
    Array.from(e.target.files).forEach((fileObject) => {
      let content = window.fs.readContentFromFile(fileObject.path);
      content = JSON.parse(content);
      console.log(content);
      // TODO: Add clips data to application context.
    });
  };

  return (
    <>
      <p>{C_SETTINGS_VW.DATASOURCE_SELECT_LABEL}</p>
      <FileInput
        text={C_SETTINGS_VW.DATASOURCE_SELECT_INPUT_LABEL}
        buttonText={C_SETTINGS_VW.DATASOURCE_SELECT_BUTTON_LABEL}
        inputProps={{
          directory: "",
          webkitdirectory: "",
          multiple: true,
        }}
        onInputChange={handleDatasourceChange}
      />
    </>
  );
};

export default DataSource;
