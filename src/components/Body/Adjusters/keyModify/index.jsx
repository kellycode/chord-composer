/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_CHORD } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";

const style = {
  border: {
    ...DEFAULT_STYLE.border
  },
  button: {
    fontSize: 20,
    minHeight: 40,
    minWidth: 100,
    ...DEFAULT_STYLE.button
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

/**
 * Key Modifiers
 * @prop {Dispatch} props  - Properties
 */
class KeyModifiers extends Component<Props> {
  /**
   * Change Chord
   * @param {string} chord - Chord
   */
  changeChord = (chord: string) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_CHORD,
      chord
    });
  };

  /**
   * Render
   */
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

export default connect()(KeyModifiers);
