/* @flow */
import React, { Component } from "react";

import { connect } from "react-redux";
import ModeChange from "./modeChange";
import KeyChangers from "./keyChange";
import KeyModifiers from "./keyModify";

const style = {
  adjusters: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: 25
  }
};

type Props = null;
class Adjusters extends Component<Props> {
  render() {
    return (
      <div style={style.adjusters}>
        <ModeChange />
        <KeyChangers />
        <KeyModifiers />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Adjusters);
