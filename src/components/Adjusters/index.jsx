/* @flow */
import React, { Component } from "react";

import { connect } from "react-redux";
import ChangeKeyButtons from "./keys";

type Props = {};
class Adjusters extends Component<Props> {
  render() {
    return (
      <div>
        <ChangeKeyButtons />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Adjusters);
