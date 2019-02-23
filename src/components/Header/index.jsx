/* @flow */
import React from "react";
import { PALETTE } from "../../constants/palette";
import DEFAULT_STYLE from "../../constants/styles";

const styles = {
  header: {
    background: PALETTE.teal,
    flex: 1,
    padding: 10
  },
  title: {
    ...DEFAULT_STYLE.title,
    color: PALETTE.white
  }
};

/**
 * Header
 */
const Header = () => {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>CHORD-GEN</h1>
    </div>
  );
};

export default Header;
