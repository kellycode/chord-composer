/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import { BUTTON_STYLE } from "../../../../constants/styles";

const styles = {
  addButton: {
    flex: 1,
    height: 30,
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
  noteInput: {
    color: PALETTE.black,
    fontSize: 20,
    margin: 5,
    width: 50
  },
  deleteButton: {
    height: 25,
    margin: 10,
    width: 25,
    ...BUTTON_STYLE
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
    color: PALETTE.tealLight
  },
  view: {
    margin: "10px 5px 10px 5px"
  }
};

type Props = Dispatch;

class NoteSelectors extends Component<Props> {
  onChangeNoteFret = (index, event) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_FRET,
      value: event.target.value
    });
  };
  onChangeNoteString = (index, event) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_STRING,
      value: event.target.value
    });
  };
  onChangeNoteFinger = (index, event) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_FINGER,
      value: event.target.value
    });
  };
  onChangeNoteBarre = (index, event) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_BARRE,
      value: event.target.value
    });
  };
  onDeleteNote = (index, event) => {
    this.props.dispatch({
      index,
      type: actionTypes.DELETE_NOTE
    });
  };
  onAddNote = event => {
    this.props.dispatch({
      type: actionTypes.ADD_NOTE
    });
  };
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
                      value={this.props.customChordNotes[index].finger}
                    />
                  </div>
                  <div style={styles.column}>
                    <h3 style={styles.text}>Barre:</h3>
                    <input
                      style={styles.noteInput}
                      type="text"
                      onChange={this.onChangeNoteBarre.bind(this, index)}
                      value={this.props.customChordNotes[index].barre}
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(NoteSelectors);
