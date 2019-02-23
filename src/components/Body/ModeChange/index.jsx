/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_MODES } from "../../../constants/keys";
import { INSTRUMENTS } from "../../../constants/index";
import actionTypes from "../../../redux/actionTypes";
import { PALETTE } from "../../../constants/palette";
import DEFAULT_STYLE from "../../../constants/styles";
import type { Modes, State } from "../../../constants/types";

const styles = {
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
  buttonSelected: {
    fontSize: 20,
    minHeight: 50,
    minWidth: 120,
    ...DEFAULT_STYLE.button,
    backgroundColor: PALETTE.tealDark
  },
  title: {
    ...DEFAULT_STYLE.title
  },
  view: {
    margin: "10px 5px 10px 5px"
  }
};

type StateProps = {
  currentMode: Modes
};
type Props = Dispatch;

/**
 * Name Selectors
 * @prop {Props} props - Properties
 */
class ModeChange extends Component<Props> {
  /**
   * Change Mode
   * @param {string} mode - Mode
   */
  changeMode = (mode: string) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_MODE,
      mode
    });
  };

  /**
   * Render
   */
  render() {
    console.log(this.props.currentMode);
    console.log(INDEX_MODES);
    return (
      <div style={styles.view}>
        <h2 style={styles.title}>MODES</h2>
        <div style={styles.border}>
          {INDEX_MODES.slice(0, 4).map(mode => {
            return (
              <button
                onClick={() => this.changeMode(mode.value)}
                key={mode.value}
                style={
                  this.props.currentMode === mode.value
                    ? styles.buttonSelected
                    : styles.button
                }
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
/**
 * Map State to Props
 * @param {State} state - State
 */
const mapStateToProps = (state: State): StateProps => {
  const { settings, custom } = state;
  if (custom) {
    return { currentMode: "custom" };
  } else if (settings.instrument.text === INSTRUMENTS.guitar.text) {
    return { currentMode: INSTRUMENTS.guitar.text };
  } else if (settings.instrument.text === INSTRUMENTS.ukulele.text) {
    return { currentMode: INSTRUMENTS.ukulele.text };
  }
  return { currentMode: "custom" };
};

export default connect(mapStateToProps)(ModeChange);
