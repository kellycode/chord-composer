/* @flow */
import React from "react";
import ModeChanger from "../ModeChanger";
import NameSelector from "./NameSelector";
import NeckSelector from "./NeckSelector";
import NoteSelector from "./NoteSelector";

const styles = {
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
    <div style={styles.custom}>
      <ModeChanger />
      <NeckSelector />
      <NameSelector />
      <NoteSelector />
    </div>
  );
};

export default Custom;
