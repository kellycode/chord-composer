import actionTypes from "./actionTypes";
import * as C from "../constants";
import keys from "../constants/keys";

const initialState = {
  chordNotes: [],
  instrument: C.GUITAR,
  chordName: {},
  settings: {
    frets: 6,
    startingFret: 0
  },
  currentKey: "a",
  currentChord: "maj"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_KEY:
      const newState = {
        ...state,
        chordNames: keys[action.key][state.currentChord].chordNames,
        chordNotes: keys[action.key][state.currentChord].chordNotes.guitar,
        currentKey: action.key
      };
      return newState;
    case actionTypes.CHANGE_CHORD:
      return {
        ...state,
        chordNames: keys[state.currentKey][action.chord].chordNames,
        chordNotes: keys[state.currentKey][action.chord].chordNotes.guitar,
        currentChord: action.chord
      };
    default:
      return { ...state };
  }
};
