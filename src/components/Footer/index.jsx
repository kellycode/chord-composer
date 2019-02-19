/* @flow */
import React from "react";
import { PALETTE } from "../../constants/palette";

const style = {
  footer: {
    background: PALETTE.tealDark,
    flex: 1,
    padding: 10,
    width: "100%",
    marginTop: "auto"
  },
  message: {
    color: PALETTE.white,
    flex: 1
  }
};

/**
 * Footer
 */
const Footer = () => {
  return (
    <div style={style.footer}>
      <p style={style.message}>
        You can find the project here: https://github.com/hirokazutei/ChordGen
      </p>
    </div>
  );
};

export default Footer;
