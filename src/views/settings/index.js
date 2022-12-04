import React from "react";
import DataSourceInput from "../../components/DataSource";

const Settings = () => {
  return (
    <div className="app-root-container">
      <h1>Settings</h1>
      <p>Manage you preferences and configuration for ClipD.</p>
      <DataSourceInput />
    </div>
  );
};

export default Settings;
