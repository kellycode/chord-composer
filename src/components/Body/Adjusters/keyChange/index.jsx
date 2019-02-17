/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_KEYS } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";

const style = {
  border: {
    ...DEFAULT_STYLE.border
  },
  button: {
    fontSize: 16,
    minHeight: 40,
    minWidth: 80,
    ...DEFAULT_STYLE.button
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

/**
 * Key Changer
 * @prop {Dispatch} props  - Properties
 */
class KeyChangers extends Component<Props> {
  /**
   * Change Key
   * @prop {string} key - Key
   */
  changeKey = (key: string) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_KEY,
      key
    });
  };

  /**
   * Render
   */
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

export default connect()(KeyChangers);
