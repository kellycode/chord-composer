/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import sketch from "./sketch";

import type { State } from "../../../constants/types";
import { PALETTE } from "../../../constants/palette";

const styles = {
  base: {
    backgroundColor: PALETTE.white,
    display: "flex",
    flexDirection: "column",
    height: 700,
    justifyContent: "center",
    margin: 25
  },
  sketch: {
    height: 670,
    width: 520
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
    return (
      <div style={styles.base}>
        <div id="canvas-container" style={styles.sketch} />
      </div>
    );
  }
}

// State passed down to the sketch.
export default connect(
  (state: State): State => {
    return state;
  }
)(P5Wrapper);
