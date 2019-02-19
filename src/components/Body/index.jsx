/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import P5Wrapper from "./P5Wrapper";
import Adjusters from "./Adjusters";
import Custom from "./Custom";
import { PALETTE } from "../../constants/palette";
import type { State } from "../../constants/types";

const style = {
  body: {
    backgroundColor: PALETTE.white,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1
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
      <div style={style.body}>
        <P5Wrapper />
        {custom ? <Custom /> : <Adjusters />}
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
