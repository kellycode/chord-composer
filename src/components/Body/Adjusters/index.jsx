/* @flow */
import React from "react";

import ModeChanger from "../ModeChanger";
import KeyChanger from "./KeyChanger";
import KeyModifier from "./KeyModifier";

const styles = {
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
    <div style={styles.adjusters}>
      <ModeChanger />
      <KeyChanger />
      <KeyModifier />
    </div>
  );
};

export default Adjusters;
