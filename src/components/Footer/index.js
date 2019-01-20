/* @flow */
import React, { Component } from "react";
import { PALETTE } from "../../constants/palette";

const style = {
  footer: {
    background: PALETTE.tealDark,
    padding: 10
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
