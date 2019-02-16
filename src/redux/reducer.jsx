import actionTypes from "./actionTypes";
import * as C from "../constants";
import keys from "../constants/keys";
import { GUITAR, UKULELE } from "../constants/index";

export const initialState = {
  chordNotes: [],
  chordNames: [],
  custom: false,
  settings: {
    frets: 4,
    instrument: C.GUITAR,
    startingFret: 1
  },
  currentKey: "a",
  currentChord: "maj",
  customExtraName: true,
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
      strings: 6
    },
    startingFret: 1
  }
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
    // CHANGE NAME
    case actionTypes.CHANGE_NAME: {
      const newChordName = [...state.customChordNames];
      newChordName[action.value.index].key = action.value.text;
      return {
        ...state,
        customChordname: newChordName
      };
    }
    // CHANGE AUX TEXT
    case actionTypes.CHANGE_AUX_TEXT: {
      const newChordName = [...state.customChordNames];
      newChordName[action.value.index].aux = action.value.text;
      return {
        ...state,
        customChordname: newChordName
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
        customChordname: newChordName
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
          state.warning = null;
        } else {
          state.warning = "That's way too many frets!";
        }
      } else if (action.value === -1) {
        if (newSettings.frets > 1) {
          newSettings.frets--;
          state.warning = null;
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
          state.warning = null;
        } else {
          state.warning = "That's way too many strings!";
        }
      } else if (action.value === -1) {
        if (newSettings.instrument.strings > 2) {
          newSettings.instrument.strings--;
          state.warning = null;
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
          state.warning = null;
        } else {
          state.warning = "Your instrument has more than 99 frets?!";
        }
      } else if (action.value === -1) {
        if (newSettings.startingFret > 1) {
          newSettings.startingFret--;
          state.warning = null;
        } else {
          state.warning = "What the heck is 0th fret!";
        }
      }
      return {
        ...state,
        customSettings: newSettings
      };
    }

    default:
      return { ...state };
  }
};
