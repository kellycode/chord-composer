/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { ChordNote, State } from "../../../../constants/types";

const styles = {
  addButton: {
    flex: 1,
    height: 30,
    ...DEFAULT_STYLE.button
  },
  border: {
    ...DEFAULT_STYLE.border
  },
  noteInput: {
    color: PALETTE.tealDark,
    fontSize: 20,
    margin: 5,
    width: 50
  },
  deleteButton: {
    height: 25,
    margin: 10,
    width: 25,
    ...DEFAULT_STYLE.button
  },
  column: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flesDirection: "column"
  },
  row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
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
  customChordNotes: Array<ChordNote>
};
type Props = Dispatch & StateProps;

/**
 * Note Selectors
 * @prop {Props} props - Properties
 * */
class NoteSelectors extends Component<Props> {
  /**
   * On Change Note Fret
   * @param {number} index - Index of Note Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteFret = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_FRET,
      value: event.target.value
    });
  };

  /**
   * On Change Note String
   * @param {number} index - Index of String Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteString = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_STRING,
      value: event.target.value
    });
  };

  /**
   * On Change Note Finger
   * @param {number} index - Index of Finger Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteFinger = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_FINGER,
      value: event.target.value
    });
  };

  /**
   * On Change Note Barre
   * @param {number} index - Index of Barre Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteBarre = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_BARRE,
      value: event.target.value
    });
  };

  /**
   * On Delete Note
   * @param {number} index - Index of Note Deleted
   */
  onDeleteNote = index => {
    this.props.dispatch({
      index,
      type: actionTypes.DELETE_NOTE
    });
  };

  /**
   * On Add Note
   */
  onAddNote = () => {
    this.props.dispatch({
      type: actionTypes.ADD_NOTE
    });
  };

  /**
   * Render
   */
  render() {
    return (
      <div style={styles.view}>
        <h2 style={styles.title}>{"NOTES"}</h2>
        <div style={styles.border}>
          <div style={styles.row}>
            {this.props.customChordNotes.map((chordNote, index) => {
              return (
                <div style={styles.column} key={index}>
                  <div style={styles.column}>
                    <h3 style={styles.text}>String:</h3>
                    <input
                      style={styles.noteInput}
                      type="text"
                      onChange={this.onChangeNoteString.bind(this, index)}
                      value={this.props.customChordNotes[index].string}
                    />
                  </div>
                  <div style={styles.column}>
                    <h3 style={styles.text}>Fret:</h3>
                    <input
                      style={styles.noteInput}
                      type="text"
                      onChange={this.onChangeNoteFret.bind(this, index)}
                      value={this.props.customChordNotes[index].fret}
                    />
                  </div>
                  <div style={styles.column}>
                    <h3 style={styles.text}>Finger:</h3>
                    <input
                      style={styles.noteInput}
                      type="text"
                      onChange={this.onChangeNoteFinger.bind(this, index)}
                      value={
                        this.props.customChordNotes[index].finger
                          ? this.props.customChordNotes[index].finger
                          : ""
                      }
                    />
                  </div>
                  <div style={styles.column}>
                    <h3 style={styles.text}>Barre:</h3>
                    <input
                      style={styles.noteInput}
                      type="text"
                      onChange={this.onChangeNoteBarre.bind(this, index)}
                      value={
                        this.props.customChordNotes[index].barre
                          ? this.props.customChordNotes[index].barre
                          : ""
                      }
                    />
                  </div>
                  <button
                    style={styles.deleteButton}
                    onClick={this.onDeleteNote.bind(this, index)}
                  >
                    x
                  </button>
                </div>
              );
            })}
            <div style={styles.column}>
              <button style={styles.addButton} onClick={this.onAddNote}>
                + ADD ANOTHER NOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { customChordNotes } = state;
  return { customChordNotes };
};

export default connect(mapStateToProps)(NoteSelectors);
