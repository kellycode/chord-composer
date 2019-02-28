/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import P5Wrapper from "./P5Wrapper";
import Adjusters from "./Adjusters";
import Custom from "./Custom";
import type { State } from "../../constants/types";

const styles = {
  body: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

type Props = {
  custom: boolean
};
/**
 * Body
 * @prop {boolean} custom - Is Custom
 */
class Body extends Component<Props> {
  /**
   * Render
   */
  render() {
    const { custom } = this.props;
    return (
      <div style={styles.body}>
        <P5Wrapper />
        <div style={styles.rightSide}>
          {custom ? <Custom /> : <Adjusters />}
        </div>
      </div>
    );
  }
}

/**
 * Map State to Props
 * @param {State} state -State
 */
const mapStateToProps = (state: State): Props => {
  const { custom } = state;
  return { custom };
};

export default connect(mapStateToProps)(Body);
