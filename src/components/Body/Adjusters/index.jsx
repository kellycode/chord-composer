/* @flow */
import React from "react";

import ModeChange from "../ModeChange";
import KeyChangers from "./KeyChange";
import KeyModifiers from "./KeyModify";

const style = {
  adjusters: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: 25
  }
};

/**
 * Adjusters
 */
const Adjusters = () => {
  return (
    <div style={style.adjusters}>
      <ModeChange />
      <KeyChangers />
      <KeyModifiers />
    </div>
  );
};

export default Adjusters;
