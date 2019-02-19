/* @flow */
import React from "react";
import { PALETTE } from "../../constants/palette";

const style = {
  header: {
    background: PALETTE.teal,
    flex: 1,
    padding: 10
  },
  title: {
    color: PALETTE.white
  }
};

/**
 * Header
 */
const Header = () => {
  return (
    <div style={style.header}>
      <h1 style={style.title}>CHORD-GEN</h1>
    </div>
  );
};

export default Header;
