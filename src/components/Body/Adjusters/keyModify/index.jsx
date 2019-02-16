/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_CHORD } from "../../../../constants/keys";
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
    fontSize: 20,
    margin: 5,
    minHeight: 40,
    minWidth: 100,
    ...BUTTON_STYLE
  },
  row: {
    display: "flex",
    flex: 1,
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

class KeyModifiers extends Component<Props> {
  changeChord = chord => {
    this.props.dispatch({
      type: actionTypes.CHANGE_CHORD,
      chord
    });
  };

  render() {
    return (
      <div style={style.view}>
        <h2 style={style.title}>CHORDS</h2>
        <div style={style.border}>
          <div style={style.row}>
            {INDEX_CHORD.slice(0, 4).map(chord => {
              return (
                <button
                  onClick={() => this.changeChord(chord.chord)}
                  key={chord.chord}
                  style={style.button}
                >
                  {chord.display}
                </button>
              );
            })}
          </div>
          <div style={style.row}>
            {INDEX_CHORD.slice(4, 8).map(chord => {
              return (
                <button
                  onClick={() => this.changeChord(chord.chord)}
                  key={chord.chord}
                  style={style.button}
                >
                  {chord.display}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(KeyModifiers);
