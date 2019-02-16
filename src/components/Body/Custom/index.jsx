/* @flow */
import React from "react";

import ModeChange from "../ModeChange";
import NameSelectors from "./NameSelectors";
import NeckSelectors from "./NeckSelectors";

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
      <NeckSelectors />
      <NameSelectors />
    </div>
  );
};

export default Custom;
