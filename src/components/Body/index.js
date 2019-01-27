/* @flow */
import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper";
import Adjusters from "./Adjusters";
import { PALETTE } from "../../constants/palette";

const style = {
  body: {
    backgroundColor: PALETTE.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 25
  }
};

type Props = null;

export default class Body extends Component<Props> {
  render() {
    return (
      <div style={style.body}>
        <P5Wrapper />
        <Adjusters />
      </div>
    );
  }
}
