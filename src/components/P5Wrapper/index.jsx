/* @flow */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import sketch from "./sketch";

import { ChordName, ChordNote, Instrument, Settings } from "./sketch/types";

type Props = {
  chordName: ChordName,
  chordNotes: Array<ChordNote>,
  instrument: Instrument,
  settings: Settings
};

class P5Wrapper extends Component {
  componentDidMount() {
    this.canvas = new window.p5(sketch, "canvas-container");
    this.canvas.props = this.props;
  }

  shouldComponentUpdate(nextProps) {
    this.canvas.props = nextProps;
    return false;
  }

  componentWillUnmount() {
    this.canvas.remove();
  }
  render() {
    return (
      <>
        <div id="canvas-container" />
      </>
    );
  }
}

export default connect(state => {
  console.log(state);
  return state;
})(P5Wrapper);
