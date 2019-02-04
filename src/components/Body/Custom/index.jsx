/* @flow */
import React from "react";

import ModeChange from "../ModeChange";

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
    </div>
  );
};

export default Custom;
