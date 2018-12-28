/* @flow */
import * as C from "../../../constants";
import type { ChordName, ChordNote, Instrument, Settings } from "./types";

/**
 * Render the Neck Portion of Chord
 * @param {Object} s - sketch
 * @param {Object} settings - render settings
 * @param {Object} instrument - an instrument object
 */
export const renderNeck = (s, settings: Settings, instrument: Instrument) => {
  standerdizeRenderSetting(s);
  const { frets, startingFret } = settings;
  const { strings } = instrument;

  // Strings
  const stringSpacing = C.NECK_WIDTH / (strings - 1);
  for (let string = 0; string < strings; string++) {
    s.line(
      C.NECK_WIDTH_MARGIN + stringSpacing * string,
      C.TOP_SPACE,
      C.NECK_WIDTH_MARGIN + stringSpacing * string,
      C.HEIGHT - C.BOT_SPACE
    );
  }

  // Frets
  let fretSpacing = C.NECK_HEIGHT / frets;
  for (let fret = 0; fret <= frets; fret++) {
    let weight = C.LINE_WEIGHT.STANDARD;
    let capAdjust = C.CAP_ADJUST.STANDARD;
    if (fret === 0 && startingFret === 1) {
      weight = C.LINE_WEIGHT.THICK;
      capAdjust = C.CAP_ADJUST.THICK;
    }
    s.strokeWeight(weight);
    s.line(
      C.NECK_WIDTH_MARGIN + capAdjust,
      C.TOP_SPACE + fretSpacing * fret,
      C.WIDTH - C.NECK_WIDTH_MARGIN - capAdjust,
      C.TOP_SPACE + fretSpacing * fret
    );
  }
};

/**
 * Render Chord Name
 * @param {Object} s - sketch
 * @param {list} chordNames - list of ChordNames
 */
export const renderChordName = (s, chordNames: Array<ChordName>) => {
  standerdizeRenderSetting(s);
  let spacing = findTextStartingX(s, chordNames);
  if (!chordNames) {
    return;
  }
  for (const [index, chordName] of chordNames.entries()) {
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    s.textSize(C.TEXT_SIZE.STANDARD);
    s.text(`${key}`, spacing, C.TEXT_HEIGHT);
    spacing += s.textWidth(key);

    // Sharp Flat
    s.textSize(C.TEXT_SIZE.SUBTEXT);
    s.text(
      `${sharp ? "♯" : ""}${flat ? "♭" : ""}`,
      spacing - 20,
      C.TEXT_HEIGHT - 40
    ); // Kaz turn these into const

    // Aux Text
    if (aux) {
      s.text(`${aux}`, spacing, C.TEXT_HEIGHT);
      spacing += s.textWidth(aux);
    }

    // Add Dash
    if (chordNames.length !== 0 && index + 1 < chordNames.length) {
      s.textSize(C.TEXT_SIZE.STANDARD);
      s.text(`/`, spacing + 10, C.TEXT_HEIGHT);
      spacing += s.textWidth("/") + 10;
    }
  }
};

/**
 * Find The Starting X Position
 * @param {Object} s - sketch
 * @param {list} chordNames - list of ChordNames
 */
export const findTextStartingX = (s, chordNames: Array<ChordName>) => {
  let x = 0;
  if (!chordNames) {
    return;
  }
  for (let [index, chordName] of chordNames.entries()) {
    const { key, aux } = chordName;
    // Main Chord
    s.textSize(C.TEXT_SIZE.STANDARD);
    x += s.textWidth(key);
    if (aux) {
      s.textSize(C.TEXT_SIZE.SUBTEXT);
      x += s.textWidth(aux);
    }
    if (index) {
      s.textSize(C.TEXT_SIZE.STANDARD);
      x += s.textWidth("/");
    }
  }
  const startingX = (C.WIDTH - x) / 2;
  return startingX;
};

/**
 * Render Chord Notes
 * @param {Object} s - sketch
 * @param {list} chordNotes - of Chord Notes
 * @param {Object} instrument - the instrument
 * @param {Object} settings - the setting
 */
export const renderChordNotes = (
  s,
  chordNotes: Array<ChordNote>,
  instrument: Instrument,
  settings: Settings
) => {
  const { strings } = instrument;
  const { frets } = settings;
  const openChords = new Array(instrument.strings).fill(false);
  const stringSpacing = C.NECK_WIDTH / (strings - 1);
  const fretSpacing = C.NECK_HEIGHT / frets;
  // Render Notes && Finger Positions
  s.fill(C.COLOR.BLACK);
  for (let chordNote of chordNotes) {
    const { string: noteString, fret: noteFret, finger } = chordNote;
    // Render Notes
    if (noteFret) {
      s.ellipse(
        C.NECK_WIDTH_MARGIN + stringSpacing * noteString,
        C.TOP_SPACE + fretSpacing * (noteFret - 0.5),
        20
      ); // turn into const kaz
    }
    if (!noteFret) {
      openChords[noteString] = true;
    } else if (!openChords[noteString]) {
      openChords[noteString] = null;
    }
  }
  // Render Barre
  for (let chordNote of chordNotes) {
    const { barre, string: noteString, fret: noteFret } = chordNote;
    if (barre) {
      const maxBarre = barre < strings ? barre : strings - 1;
      for (let note of [noteString, maxBarre]) {
        s.ellipse(
          C.NECK_WIDTH_MARGIN + stringSpacing * note,
          C.TOP_SPACE + fretSpacing * (noteFret - 0.5),
          20
        ); // turn into const kaz
      }
      s.rect(
        C.NECK_WIDTH_MARGIN + stringSpacing * noteString,
        C.TOP_SPACE + fretSpacing * (noteFret - 1) + 20,
        C.NECK_WIDTH_MARGIN + stringSpacing * maxBarre,
        C.TOP_SPACE + fretSpacing * noteFret - 20
      ); // turn into const kaz
      for (let i = noteString; i <= maxBarre; i++) {
        openChords[i] = null;
      }
    }
  }

  // Render Finger
  for (let chordNote of chordNotes) {
    const { barre, string: noteString, finger, fret: noteFret } = chordNote;
    const maxBarre = barre <= strings ? barre : strings - 1;
    const fretSpacing = C.NECK_HEIGHT / frets;
    const x =
      C.NECK_WIDTH_MARGIN -
      10 +
      (barre
        ? (stringSpacing * (noteString + maxBarre)) / 2
        : stringSpacing * noteString);
    const y = C.TOP_SPACE + fretSpacing * noteFret - 28;
    s.fill(C.COLOR.WHITE);
    if (finger) {
      s.textSize(36);
      s.text(finger, x, y);
    }
  }

  // Render Open/Close Note
  if (!openChords) {
    return;
  }
  for (let [index, openChord] of openChords.entries()) {
    if (openChord) {
      s.fill(255, 255, 255);
      s.ellipse(
        C.NECK_WIDTH_MARGIN + stringSpacing * index,
        C.TOP_SPACE - 25,
        15
      );
    } else if (openChord === false) {
      s.fill(0, 0, 0);
      s.textSize(40);
      s.text(
        "X",
        C.NECK_WIDTH_MARGIN + stringSpacing * index - 13,
        C.TOP_SPACE - 10
      );
    }
  }
};

/*
export const changeInstrument = (currentInstrumentIndex, instruments) => {
  if (currentInstrumentIndex + 1 < instruments.length) {
    return ++currentInstrumentIndex;
  }
  return 0;
};

function mousePressed() {
  currentInstrumentIndex = changeInstrument(
    currentInstrumentIndex,
    C.INSTRUMENTS
  );
}*/

export const standerdizeRenderSetting = s => {
  s.textSize(C.TEXT_SIZE.STANDARD);
  s.fill(C.COLOR.BLACK);
  s.strokeWeight(C.LINE_WEIGHT.STANDARD);
};
