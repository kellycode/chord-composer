/* @flow */
import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import { PALETTE } from "./constants/palette";

const styles = {
  global: {
    backgroundColor: PALETTE.background,
    display: "flex",
    flexDirection: "column",
    minHeight: "100%"
  }
};

/**
 * App
 */
const App = () => {
  return (
    <div style={styles.global}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
