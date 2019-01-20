/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_KEYS } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";

const style = {
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: PALETTE.teal,
    borderRadius: 0,
    border: "none",
    color: PALETTE.white,
    flex: 1,
    margin: 5,
    padding: "10px 15px 10px 15px"
  }
};

type Props = Dispatch;

class KeyChangers extends Component<Props> {
  changeKey = key => {
    this.props.dispatch({
      type: actionTypes.CHANGE_KEY,
      key
    });
  };

  render() {
    return (
      <div style={style.view}>
        {INDEX_KEYS.map(key => (
          <button
            onClick={() => this.changeKey(key)}
            key={key}
            style={style.button}
          >
            {key}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(KeyChangers);
