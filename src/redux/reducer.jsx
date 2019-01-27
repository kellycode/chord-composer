import actionTypes from "./actionTypes";
import * as C from "../constants";
import keys from "../constants/keys";
import { GUITAR, UKULELE } from "../constants/index";

export const initialState = {
  chordNotes: [],
  chordName: {},
  settings: {
    custom: false,
    frets: 4,
    instrument: C.GUITAR,
    startingFret: 1
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
        chordNotes:
          keys[action.key][state.currentChord].chordNotes[
            state.settings.instrument.text
          ],
        currentKey: action.key
      };
      return newState;
    case actionTypes.CHANGE_CHORD:
      return {
        ...state,
        chordNames: keys[state.currentKey][action.chord].chordNames,
        chordNotes:
          keys[state.currentKey][action.chord].chordNotes[
            state.settings.instrument.text
          ],
        currentChord: action.chord
      };
    case actionTypes.CHANGE_MODE:
      let newMode;
      switch (action.mode) {
        case GUITAR.text: {
          state.settings.instrument = GUITAR;
          console.log(state);
          return {
            ...state,
            chordNames: keys[state.currentKey][state.currentChord].chordNames,
            chordNotes:
              keys[state.currentKey][state.currentChord].chordNotes[
                state.settings.instrument.text
              ]
          };
        }
        case UKULELE.text: {
          state.settings.instrument = UKULELE;
          return {
            ...state,
            chordNames: keys[state.currentKey][state.currentChord].chordNames,
            chordNotes:
              keys[state.currentKey][state.currentChord].chordNotes[
                state.settings.instrument.text
              ]
          };
        }
        default: {
          break;
        }
      }
      state.settings.custom = true;
      return {
        ...state
      };
    default:
      return { ...state };
  }
};
