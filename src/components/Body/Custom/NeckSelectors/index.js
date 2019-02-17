/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import { BUTTON_STYLE } from "../../../../constants/styles";

const styles = {
  increaseButton: {
    flex: 1,
    fontSize: 10,
    height: 20,
    width: 30,
    margin: 5,
    marginBottom: 0,
    ...BUTTON_STYLE,
    borderRadius: "5px 5px 0px 0px"
  },
  decreaseButton: {
    flex: 1,
    fontSize: 10,
    height: 20,
    width: 30,
    margin: 5,
    marginTop: 0,
    ...BUTTON_STYLE,
    borderRadius: "0px 0px 5px 5px"
  },
  border: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderColor: PALETTE.tealLight,
    borderStyle: "solid",
    borderWidth: 3,
    padding: 10
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "no-space-between",
    alignItems: "centre"
  },
  keyButtons: {
    flex: 1,
    fontSize: 10,
    height: 20,
    width: 20,
    margin: 3,
    ...BUTTON_STYLE
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
    color: PALETTE.tealLight
  },
  view: {
    margin: "10px 5px 10px 5px"
  }
};

type Props = Dispatch;

class NeckSelectors extends Component<Props> {
  onChangeFret = (event, step) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_FRET,
      value: step
    });
  };
  onChangeString = (event, step) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_STRING,
      value: step
    });
  };
  onChangeStartingFret = (event, step) => {
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
                  onClick={() => this.onChangeFret(this, 1)}
                >
                  ▲
                </button>
                <button
                  style={styles.decreaseButton}
                  onClick={() => this.onChangeFret(this, -1)}
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
                  onClick={() => this.onChangeString(this, 1)}
                >
                  ▲
                </button>
                <button
                  style={styles.decreaseButton}
                  onClick={() => this.onChangeString(this, -1)}
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
                  onClick={() => this.onChangeStartingFret(this, 1)}
                >
                  ▲
                </button>
                <button
                  style={styles.decreaseButton}
                  onClick={() => this.onChangeStartingFret(this, -1)}
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(NeckSelectors);
