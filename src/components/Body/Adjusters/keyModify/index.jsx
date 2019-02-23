/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_CHORD } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { State } from "../../../../constants/types";

const styles = {
  border: {
    ...DEFAULT_STYLE.border
  },
  button: {
    fontSize: 20,
    minHeight: 40,
    minWidth: 100,
    ...DEFAULT_STYLE.button
  },
  buttonSelected: {
    fontSize: 20,
    minHeight: 40,
    minWidth: 100,
    ...DEFAULT_STYLE.button,
    backgroundColor: PALETTE.tealDark
  },
  row: {
    display: "flex",
    flex: 1,
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
  currentChord: string
};

type Props = Dispatch & StateProps;

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
      <div style={styles.view}>
        <h2 style={styles.title}>CHORDS</h2>
        <div style={styles.border}>
          <div style={styles.row}>
            {INDEX_CHORD.slice(0, 4).map(chord => {
              return (
                <button
                  onClick={() => this.changeChord(chord.chord)}
                  key={chord.chord}
                  style={
                    this.props.currentChord === chord.chord
                      ? styles.buttonSelected
                      : styles.button
                  }
                >
                  {chord.display}
                </button>
              );
            })}
          </div>
          <div style={styles.row}>
            {INDEX_CHORD.slice(4, 8).map(chord => {
              return (
                <button
                  onClick={() => this.changeChord(chord.chord)}
                  key={chord.chord}
                  style={
                    this.props.currentChord === chord.chord
                      ? styles.buttonSelected
                      : styles.button
                  }
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

/**
 * Map State to Props
 * @param {State} state - State
 */
const mapStateToProps = (state: State): StateProps => {
  const { currentChord } = state;
  return { currentChord };
};

export default connect(mapStateToProps)(KeyModifiers);
