/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import sketch from "./sketch";

import type { State } from "../../../constants/types";

const styles = {
  sketch: {
    width: 500
  }
};

type Props = State;

class P5Wrapper extends Component<Props> {
  canvas: any;

  /**
   * Component Did Mount
   */
  componentDidMount() {
    this.canvas = new window.p5(sketch, "canvas-container");
    this.canvas.props = this.props;
  }

  /**
   * Should Component Updatte
   * @param {State} state - State
   */
  shouldComponentUpdate(state: State): boolean {
    this.canvas.props = state;
    return false;
  }

  /**
   * Component Will Unmount
   */
  componentWillUnmount() {
    this.canvas.remove();
  }

  /**
   * Render
   */
  render() {
    return <div id="canvas-container" style={styles.sketch} />;
  }
}

// State passed down to the sketch.
export default connect(
  (state: State): State => {
    return state;
  }
)(P5Wrapper);
