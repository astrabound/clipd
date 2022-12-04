import { FileInput } from "@blueprintjs/core";
import React, { useState } from "react";
import { C_SETTINGS_VW } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { loadClips } from "../../context/reducers/clips";
import { setSettingsKey } from "../../context/reducers/settings";

const DataSourceInput = () => {
  const [dataSourcePath, setDataSourcePath] = useState(
    useSelector((state) => state.settings.dataSourcePath)
  );
  const dispatch = useDispatch();

  const handleDatasourceChange = (e) => {
    const getClipContent = (fileObject) => {
      let content = window.fs.readContentFromFile(fileObject.path);
      content = JSON.parse(content);

      let newDataSourcePath = window.fs.parseFilePath(fileObject.path)["dir"];

      if (dataSourcePath !== newDataSourcePath) {
        setDataSourcePath(newDataSourcePath);
        dispatch(
          setSettingsKey({
            key: "dataSourcePath",
            value: newDataSourcePath,
          })
        );
      }
      return content;
    };

    if (e.target.files.length > 0) {
      let newState = Array.from(e.target.files).map(getClipContent);
      dispatch(loadClips(newState));
    }
  };

  return (
    <>
      <p>{C_SETTINGS_VW.DATASOURCE_SELECT_LABEL}</p>
      <FileInput
        text={dataSourcePath || C_SETTINGS_VW.DATASOURCE_SELECT_INPUT_LABEL}
        buttonText={C_SETTINGS_VW.DATASOURCE_SELECT_BUTTON_LABEL}
        inputProps={{
          directory: "",
          webkitdirectory: "",
          multiple: true,
        }}
        onInputChange={handleDatasourceChange}
        hasSelection={dataSourcePath !== null}
        fill={true}
      />
    </>
  );
};

export default DataSourceInput;
