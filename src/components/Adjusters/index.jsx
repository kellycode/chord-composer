/* @flow */
import React, { Component } from "react";

import { connect } from "react-redux";
import ChangeKeyButtons from "./keys";

class Adjusters extends Component {
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
