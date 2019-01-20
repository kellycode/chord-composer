/* @flow */
import React, { Component } from "react";

import { connect } from "react-redux";
import KeyChangers from "./keyChange";
import KeyModifiers from "./keyModify";

const style = {
  adjusters: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 25
  }
};

type Props = null;
class Adjusters extends Component<Props> {
  render() {
    return (
      <div style={style.adjusters}>
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
