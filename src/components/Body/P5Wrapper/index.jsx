/* @flow */
import React, { Component } from "react";

import { connect } from "react-redux";
import sketch from "./sketch";

import type { ChordName, ChordNote, Settings } from "../../../constants/types";

const styles = {
  sketch: {
    width: 500
  }
};

type Props = {
  chordName: ChordName,
  chordNotes: Array<ChordNote>,
  settings: Settings
};

class P5Wrapper extends Component<Props> {
  canvas: any;

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
    return <div id="canvas-container" style={styles.sketch} />;
  }
}

export default connect(state => {
  return state;
})(P5Wrapper);
