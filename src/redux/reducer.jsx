/* @flow */
import actionTypes from "./actionTypes";
import keys from "../constants/keys";
import { INSTRUMENTS } from "../constants/index";
import type { State } from "../constants/types";

export const initialState = {
  chordNotes: [],
  chordNames: [],
  custom: false,
  settings: {
    frets: 4,
    instrument: INSTRUMENTS.guitar,
    startingFret: 1
  },
  currentKey: "a",
  currentChord: "maj",
  customExtraName: false,
  customChordNotes: [
    { string: 1, fret: 1, finger: "1", barre: 5 },
    { string: 2, fret: 3, finger: "3" },
    { string: 4, fret: 3, finger: "4" }
  ],
  customChordNames: [
    {
      key: "A",
      sharp: true,
      flat: false,
      aux: ""
    },
    {
      key: "B",
      sharp: false,
      flat: true,
      aux: "7"
    }
  ],
  customSettings: {
    frets: 4,
    instrument: {
      strings: 6,
      text: "custom"
    },
    startingFret: 1
  },
  warning: ""
};

/**
 * Reducer
 * @param {State} state - State
 * @param {Action} action - Action
 */
export const reducer = (state: State = initialState, action: any): State => {
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
        case INSTRUMENTS.guitar.text: {
          state.settings.instrument = INSTRUMENTS.guitar;
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
        case INSTRUMENTS.ukulele.text: {
          state.settings.instrument = INSTRUMENTS.ukulele;
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
    // CHANGE NAME
    case actionTypes.CHANGE_NAME: {
      const newChordName = [...state.customChordNames];
      newChordName[action.value.index].key = action.value.text;
      return {
        ...state,
        customChordNames: newChordName
      };
    }
    // CHANGE AUX TEXT
    case actionTypes.CHANGE_AUX_TEXT: {
      const newChordName = [...state.customChordNames];
      newChordName[action.value.index].aux = action.value.text;
      return {
        ...state,
        customChordNames: newChordName
      };
    }
    // CHANGE SUPER SYMBOL
    case actionTypes.CHANGE_SUPER_SYMBOL: {
      const newChordName = [...state.customChordNames];
      switch (action.value.shift) {
        case "sharp": {
          newChordName[action.value.index].sharp = true;
          newChordName[action.value.index].flat = false;
          break;
        }
        case "flat": {
          newChordName[action.value.index].sharp = false;
          newChordName[action.value.index].flat = true;
          break;
        }
        default: {
          newChordName[action.value.index].sharp = false;
          newChordName[action.value.index].flat = false;
        }
      }
      return {
        ...state,
        customChordNames: newChordName
      };
    }
    // TOGGLE EXTRA NAME
    case actionTypes.CHANGE_EXTRA_NAME: {
      const newChordName = [...state.customChordNames];
      if (state.customExtraName) {
        newChordName.pop();
      } else {
        newChordName.push({
          key: "A",
          sharp: false,
          flat: false,
          aux: ""
        });
      }
      state.customChordNames = [...newChordName];

      return {
        ...state,
        customExtraName: !state.customExtraName
      };
    }
    // CHANGE FRET
    case actionTypes.CHANGE_FRET: {
      const newSettings = { ...state.customSettings };
      if (action.value === 1) {
        if (newSettings.frets < 16) {
          newSettings.frets++;
          state.warning = "";
        } else {
          state.warning = "That's way too many frets!";
        }
      } else if (action.value === -1) {
        if (newSettings.frets > 1) {
          newSettings.frets--;
          state.warning = "";
        } else {
          state.warning = "You at least need one fret!";
        }
      }
      return {
        ...state,
        customSettings: newSettings
      };
    }
    // CHANGE FRET
    case actionTypes.CHANGE_STRING: {
      const newSettings = { ...state.customSettings };
      if (action.value === 1) {
        if (newSettings.instrument.strings < 16) {
          newSettings.instrument.strings++;
          state.warning = "";
        } else {
          state.warning = "That's way too many strings!";
        }
      } else if (action.value === -1) {
        if (newSettings.instrument.strings > 2) {
          newSettings.instrument.strings--;
          state.warning = "";
        } else {
          state.warning = "You at least need one strings!";
        }
      }
      return {
        ...state,
        customSettings: newSettings
      };
    }

    // CHANGE STARTING FRET
    case actionTypes.CHANGE_STARTING_FRET: {
      const newSettings = { ...state.customSettings };
      if (action.value === 1) {
        if (newSettings.startingFret < 99) {
          newSettings.startingFret++;
          state.warning = "";
        } else {
          state.warning = "Your instrument has more than 99 frets?!";
        }
      } else if (action.value === -1) {
        if (newSettings.startingFret > 1) {
          newSettings.startingFret--;
          state.warning = "";
        } else {
          state.warning = "What the heck is 0th fret!";
        }
      }
      return {
        ...state,
        customSettings: newSettings
      };
    }
    // CHANGE_NOTE_STRING
    case actionTypes.CHANGE_NOTE_STRING: {
      const newChordNotes = [...state.customChordNotes];
      if (isNaN(action.value)) {
        const warning = "Please enter a valid number for the string.";
        return { ...state, warning };
      } else if (action.value < 0) {
        const warning = "Negative string does not make sense...";
        return { ...state, warning };
      } else if (action.value >= state.customSettings.instrument.strings) {
        const warning = `You've only got ${
          state.customSettings.instrument.strings
        } strings there`;
        return { ...state, warning };
      }
      newChordNotes[action.index].string = Number(action.value);
      return {
        ...state,
        customChordNotes: newChordNotes
      };
    }
    // CHANGE_NOTE_FRET
    case actionTypes.CHANGE_NOTE_FRET: {
      const newChordNotes = [...state.customChordNotes];
      if (isNaN(action.value)) {
        const warning = "Please enter a valid number for the fret.";
        return { ...state, warning };
      } else if (action.value < 0) {
        const warning = "Negative fret does not make sense...";
        return { ...state, warning };
      }
      newChordNotes[action.index].fret = Number(action.value);
      return {
        ...state,
        customChordNotes: newChordNotes
      };
    }

    // CHANGE_NOTE_FINGER
    case actionTypes.CHANGE_NOTE_FINGER: {
      const newChordNotes = [...state.customChordNotes];
      newChordNotes[action.index].finger = action.value;
      return {
        ...state,
        customChordNotes: newChordNotes
      };
    }
    // CHANGE_NOTE_BARRE
    case actionTypes.CHANGE_NOTE_BARRE: {
      const newChordNotes = [...state.customChordNotes];
      if (isNaN(action.value)) {
        const warning = "Please enter a valid number for the fret.";
        return { ...state, warning };
      } else if (action.value < 0) {
        const warning = "Negative fret does not make sense...";
        return { ...state, warning };
      } else if (action.value >= state.customSettings.instrument.strings) {
        const warning = `You've only got ${
          state.customSettings.instrument.strings
        } strings there`;
        return { ...state, warning };
      }
      newChordNotes[action.index].barre = Number(action.value);
      return {
        ...state,
        customChordNotes: newChordNotes
      };
    }

    // ADD_NOTE
    case actionTypes.ADD_NOTE: {
      const newChordNotes = [...state.customChordNotes];
      newChordNotes.push({
        string: 0,
        fret: 0,
        finger: undefined,
        barre: undefined
      });
      return {
        ...state,
        customChordNotes: newChordNotes
      };
    }
    // DELETE_NOTE
    case actionTypes.DELETE_NOTE: {
      const newChordNotes = [...state.customChordNotes];
      newChordNotes.splice(action.index, 1);
      return {
        ...state,
        customChordNotes: newChordNotes
      };
    }

    default:
      return { ...state };
  }
};
