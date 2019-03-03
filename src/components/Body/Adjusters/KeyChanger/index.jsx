/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_KEYS } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { State } from "../../../../constants/types";

const styles = {
  border: {
    ...DEFAULT_STYLE.border
  },
  button: {
    fontSize: 16,
    minHeight: 40,
    minWidth: 80,
    ...DEFAULT_STYLE.button
  },
  buttonSelected: {
    fontSize: 16,
    minHeight: 40,
    minWidth: 80,
    ...DEFAULT_STYLE.button,
    backgroundColor: PALETTE.tealDark
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  title: {
    ...DEFAULT_STYLE.title
  },
  view: {
    margin: "10px 5px 10px 5px"
  }
};

type StateProps = {
  currentKey: string
};

type Props = Dispatch & StateProps;

/**
 * Key Changer
 * @prop {Dispatch} props  - Properties
 */
class KeyChanger extends Component<Props> {
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
      <div style={styles.view}>
        <h2 style={styles.title}>KEYS</h2>
        <div style={styles.border}>
          <div style={styles.row}>
            {INDEX_KEYS.slice(0, 6).map(key => (
              <button
                onClick={() => this.changeKey(key.key)}
                key={key.key}
                style={
                  this.props.currentKey === key.key
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                {key.display}
              </button>
            ))}
          </div>
          <div style={styles.row}>
            {INDEX_KEYS.slice(6, 12).map(key => (
              <button
                onClick={() => this.changeKey(key.key)}
                key={key.key}
                style={
                  this.props.currentKey === key.key
                    ? styles.buttonSelected
                    : styles.button
                }
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

/**
 * Map State to Props
 * @param {State} state - State
 */
const mapStateToProps = (state: State): StateProps => {
  const { currentKey } = state;
  return { currentKey };
};

export default connect(mapStateToProps)(KeyChanger);
