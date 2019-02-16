/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import { BUTTON_STYLE } from "../../../../constants/styles";

const styles = {
  addNameButton: {
    flex: 1,
    fontSize: 10,
    height: 40,
    width: 215,
    margin: 3,
    marginLeft: 10,
    ...BUTTON_STYLE
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
    justifyContent: "space-evenly",
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
    flexDirection: "row"
  },
  slash: {
    color: PALETTE.teal,
    fontSize: 40
  },
  subTextInput: {
    color: PALETTE.black,
    fontSize: 10,
    margin: 3,
    width: 70
  },
  title: {
    color: PALETTE.tealLight
  },
  view: {
    margin: "10px 5px 10px 5px"
  },
  removeNameButton: {
    flex: 1,
    fontSize: 10,
    height: 40,
    width: 30,
    margin: 3,
    marginLeft: 10,
    ...BUTTON_STYLE
  }
};

type Props = Dispatch;

class NameSelectors extends Component<Props> {
  onChangeName = (index, event) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_NAME,
      value: { text: event.target.value, index }
    });
  };

  onChangeAuxText = (index, event) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_AUX_TEXT,
      value: { text: event.target.value, index }
    });
  };

  onChangeSuperSymbol = (shift, index) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_SUPER_SYMBOL,
      value: { shift, index }
    });
  };

  onChangeExtraName = () => {
    this.props.dispatch({
      type: actionTypes.CHANGE_EXTRA_NAME
    });
  };

  render() {
    return (
      <div style={styles.view}>
        <h2 style={styles.title}>NAME</h2>
        <div style={styles.border}>
          <div style={styles.row}>
            <input
              style={styles.mainNameInput}
              type="text"
              onChange={this.onChangeName.bind(this, 0)}
              value={this.props.nameMain}
            />
            <div>
              <div style={styles.buttons}>
                <button
                  style={styles.keyButtons}
                  onClick={() => this.onChangeSuperSymbol("flat", 0)}
                >
                  ♭
                </button>
                <button
                  style={styles.keyButtons}
                  onClick={() => this.onChangeSuperSymbol("sharp", 0)}
                >
                  ♯
                </button>
                <button
                  style={styles.keyButtons}
                  onClick={() => this.onChangeSuperSymbol("default", 0)}
                >
                  {" "}
                </button>
              </div>
              <input
                style={styles.subTextInput}
                type="text"
                onChange={this.onChangeAuxText.bind(this, 0)}
                value={this.props.nameSub}
              />
            </div>
            {this.props.customExtraName ? <p style={styles.slash}>/</p> : null}
            {this.props.customExtraName ? (
              <input
                style={styles.mainNameInput}
                type="text"
                onChange={this.onChangeName.bind(this, 1)}
                value={this.props.nameMain}
              />
            ) : null}
            <div>
              {this.props.customExtraName ? (
                <div style={styles.buttons}>
                  <button
                    style={styles.keyButtons}
                    onClick={() => this.onChangeSuperSymbol("flat", 1)}
                  >
                    ♭
                  </button>
                  <button
                    style={styles.keyButtons}
                    onClick={() => this.onChangeSuperSymbol("sharp", 1)}
                  >
                    ♯
                  </button>
                  <button
                    style={styles.keyButtons}
                    onClick={() => this.onChangeSuperSymbol("default", 1)}
                  >
                    {" "}
                  </button>
                </div>
              ) : null}
              {this.props.customExtraName ? (
                <input
                  style={styles.subTextInput}
                  type="text"
                  onChange={this.onChangeAuxText.bind(this, 1)}
                  value={this.props.nameSub}
                />
              ) : null}
            </div>
            <div>
              <button
                style={
                  this.props.customExtraName
                    ? styles.removeNameButton
                    : styles.addNameButton
                }
                onClick={this.onChangeExtraName}
              >
                {this.props.customExtraName ? "<" : "ADD NAME"}
              </button>
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

export default connect(mapStateToProps)(NameSelectors);
