/* @flow */
import React, { Component } from "react";
import { PALETTE } from "../../constants/palette";

const style = {
  header: {
    background: PALETTE.teal,
    padding: 10
  },
  title: {
    color: PALETTE.white
  }
};

type Props = null;

export default class HEADER extends Component<Props> {
  render() {
    return (
      <div style={style.header}>
        <h1 style={style.title}>CHORD-GEN</h1>
      </div>
    );
  }
}
