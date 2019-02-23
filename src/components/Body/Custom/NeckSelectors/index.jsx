/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { Settings, State } from "../../../../constants/types";

const styles = {
  increaseButton: {
    fontSize: 10,
    height: 20,
    width: 30,
    marginBottom: 0,
    ...DEFAULT_STYLE.button,
    borderRadius: "5px 5px 0px 0px"
  },
  decreaseButton: {
    fontSize: 10,
    height: 20,
    width: 30,
    margin: 5,
    marginTop: 0,
    ...DEFAULT_STYLE.button,
    borderRadius: "0px 0px 5px 5px"
  },
  border: {
    ...DEFAULT_STYLE.border
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "no-space-between",
    alignItems: "centre"
  },
  keyButtons: {
    fontSize: 10,
    height: 20,
    width: 20,
    margin: 3,
    ...DEFAULT_STYLE.button
  },
  mainNameInput: {
    color: PALETTE.black,
    fontSize: 30,
    margin: 5,
    width: 70
  },
  row: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  change: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row"
  },
  text: {
    color: PALETTE.teal,
    margin: 5
  },
  title: {
    ...DEFAULT_STYLE.title
  },
  view: {
    margin: "10px 5px 10px 5px"
  }
};

type StateProps = {
  customSettings: Settings
};
type Props = Dispatch & StateProps;

/**
 * Neck Selectors
 * @prop {Props} props - Properties
 */
class NeckSelectors extends Component<Props> {
  /**
   * On Change Fret
   * @param {number} step - Step Up/Down Fret
   * @param {Event} event - Typing Event
   */
  onChangeFret = (step: number, event: any) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_FRET,
      value: step
    });
  };

  /**
   * On Change String
   * @param {number} step - Step Add/Remove String
   * @param {Event} event - Typing Event
   */
  onChangeString = (step: number, event: any) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_STRING,
      value: step
    });
  };

  /**
   * On Change Fret
   * @param {number} step - Step Up/Down Starting Fret
   * @param {Event} event - Typing Event
   */
  onChangeStartingFret = (step: number, Event: any) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_STARTING_FRET,
      value: step
    });
  };

  render() {
    return (
      <div style={styles.view}>
        <h2 style={styles.title}>{"FRET & STRINGS"}</h2>
        <div style={styles.border}>
          <div style={styles.row}>
            <div style={styles.change}>
              <h3 style={styles.text}>Frets:</h3>
              <h2 style={styles.text}>{this.props.customSettings.frets}</h2>
              <div style={styles.buttons}>
                <button
                  style={styles.increaseButton}
                  onClick={this.onChangeFret.bind(this, 1)}
                >
                  ▲
                </button>
                <button
                  style={styles.decreaseButton}
                  onClick={this.onChangeFret.bind(this, -1)}
                >
                  ▼
                </button>
              </div>
            </div>
            <div style={styles.change}>
              <h3 style={styles.text}>Strings:</h3>
              <h2 style={styles.text}>
                {this.props.customSettings.instrument.strings}
              </h2>
              <div style={styles.buttons}>
                <button
                  style={styles.increaseButton}
                  onClick={this.onChangeString.bind(this, 1)}
                >
                  ▲
                </button>
                <button
                  style={styles.decreaseButton}
                  onClick={this.onChangeString.bind(this, -1)}
                >
                  ▼
                </button>
              </div>
            </div>
            <div style={styles.change}>
              <h3 style={styles.text}>Start:</h3>
              <h2 style={styles.text}>
                {this.props.customSettings.startingFret}
              </h2>
              <div style={styles.buttons}>
                <button
                  style={styles.increaseButton}
                  onClick={this.onChangeStartingFret.bind(this, 1)}
                >
                  ▲
                </button>
                <button
                  style={styles.decreaseButton}
                  onClick={this.onChangeStartingFret.bind(this, -1)}
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { customSettings } = state;
  return { customSettings };
};

export default connect(mapStateToProps)(NeckSelectors);
