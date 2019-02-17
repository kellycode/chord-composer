/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_MODES } from "../../../constants/keys";
import actionTypes from "../../../redux/actionTypes";
import { PALETTE } from "../../../constants/palette";
import DEFAULT_STYLE from "../../../constants/styles";

const style = {
  border: {
    ...DEFAULT_STYLE.border,
    flexDirection: "row"
  },
  button: {
    fontSize: 20,
    minHeight: 50,
    minWidth: 120,
    ...DEFAULT_STYLE.button
  },
  title: {
    color: PALETTE.tealLight
  },
  view: {
    margin: "10px 5px 10px 5px"
  }
};

type Props = Dispatch;

class ModeChange extends Component<Props> {
  changeMode = mode => {
    this.props.dispatch({
      type: actionTypes.CHANGE_MODE,
      mode
    });
  };

  render() {
    return (
      <div style={style.view}>
        <h2 style={style.title}>MODES</h2>
        <div style={style.border}>
          {INDEX_MODES.slice(0, 4).map(mode => {
            return (
              <button
                onClick={() => this.changeMode(mode.value)}
                key={mode.value}
                style={style.button}
              >
                {mode.display}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ModeChange);
