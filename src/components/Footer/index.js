/* @flow */
import React, { Component } from "react";
import { PALETTE } from "../../constants/palette";

const style = {
  footer: {
    background: PALETTE.tealDark,
    bottom: 0,
    padding: 10,
    position: "absolute",
    width: "100%"
  },
  message: {
    color: PALETTE.white,
    flex: 1
  }
};

type Props = null;

export default class Footer extends Component<Props> {
  render() {
    return (
      <div style={style.footer}>
        <p style={style.message}>
          You can find the project here: https://github.com/hirokazutei/ChordGen
        </p>
      </div>
    );
  }
}
