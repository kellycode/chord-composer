/* @flow */
import React from "react";

import ModeChange from "../ModeChange";
import NameSelectors from "./NameSelectors";

const style = {
  custom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: 25
  }
};

const Custom = () => {
  return (
    <div style={style.custom}>
      <ModeChange />
      <NameSelectors />
    </div>
  );
};

export default Custom;
