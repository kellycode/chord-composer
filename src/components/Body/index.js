/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import P5Wrapper from "./P5Wrapper";
import Adjusters from "./Adjusters";
import Custom from "./Custom";
import { PALETTE } from "../../constants/palette";

const style = {
  body: {
    backgroundColor: PALETTE.white,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

type Props = {
  custom: boolean
};

class Body extends Component<Props> {
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Body);
