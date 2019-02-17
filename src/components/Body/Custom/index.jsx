/* @flow */
import React from "react";
import ModeChange from "../ModeChange";
import NameSelectors from "./NameSelectors";
import NeckSelectors from "./NeckSelectors";
import NoteSelectors from "./NoteSelectors";

const style = {
  custom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    maxHeight: "100%",
    overflow: "scroll",
    padding: 25
  }
};

/**
 * Custom
 */
const Custom = () => {
  return (
    <div style={style.custom}>
      <ModeChange />
      <NeckSelectors />
      <NameSelectors />
      <NoteSelectors />
    </div>
  );
};

export default Custom;
