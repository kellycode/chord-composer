/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_KEYS } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import { BUTTON_STYLE } from "../../../../constants/styles";

const style = {
  border: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderColor: PALETTE.tealLight,
    borderStyle: "solid",
    borderWidth: 3,
    padding: 10
  },
  button: {
    flex: 1,
    fontSize: 16,
    margin: 5,
    minHeight: 40,
    minWidth: 80,
    ...BUTTON_STYLE
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  title: {
    color: PALETTE.tealLight
  },
  view: {
    margin: "10px 5px 10px 5px"
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
        <h2 style={style.title}>KEYS</h2>
        <div style={style.border}>
          <div style={style.row}>
            {INDEX_KEYS.slice(0, 6).map(key => (
              <button
                onClick={() => this.changeKey(key.key)}
                key={key.key}
                style={style.button}
              >
                {key.display}
              </button>
            ))}
          </div>
          <div style={style.row}>
            {INDEX_KEYS.slice(6, 12).map(key => (
              <button
                onClick={() => this.changeKey(key.key)}
                key={key.key}
                style={style.button}
              >
                {key.display}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(KeyChangers);
