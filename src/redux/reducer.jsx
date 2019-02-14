import actionTypes from "./actionTypes";
import * as C from "../constants";
import keys from "../constants/keys";
import { GUITAR, UKULELE } from "../constants/index";

export const initialState = {
  chordNotes: [],
  chordName: {},
  custom: false,
  settings: {
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
      switch (action.mode) {
        case GUITAR.text: {
          state.settings.instrument = GUITAR;
          return {
            ...state,
            chordNames: keys[state.currentKey][state.currentChord].chordNames,
            chordNotes:
              keys[state.currentKey][state.currentChord].chordNotes[
                state.settings.instrument.text
              ],
            custom: false
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
              ],
            custom: false
          };
        }
        default: {
          break;
        }
      }
      return {
        ...state,
        custom: true
      };
    // Change Name
    case actionTypes.CHANGE_NAME_MAIN: {
      return {
        ...state,
        nameMain: action.value
      };
    }
    case actionTypes.CHANGE_NAME_SUB: {
      return {
        ...state,
        nameSub: action.value
      };
    }
    case actionTypes.CHANGE_NAME_SUPER: {
      return {
        ...state,
        nameSuper: action.value
      };
    }

    default:
      return { ...state };
  }
};
