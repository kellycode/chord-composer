/* @flow */
// import * as C from "./constants";
// import * as type from "./types";

// ====== TEMPORARY =====
const C = {
  WIDTH: 480,
  HOR_CENTER: 480 / 2,
  HEIGHT: 660,
  NECK_WIDTH: 360,
  NECK_HEIGHT: 480,
  TOP_SPACE: 140,
  BOT_SPACE: 40,
  NECK_WIDTH_MARGIN: (480 - 360) / 2,

  TEXT_HEIGHT: 85,
  TEXT_SIZE: {
    STANDARD: 100,
    SUBTEXT: 50
  },
  LINE_WEIGHT: {
    STANDARD: 4,
    THICK: 10
  },
  CAP_ADJUST: {
    STANDARD: 0,
    THICK: 3
  },

  // Instruments
  GUITAR: {
    strings: 6,
    tuning: ["E", "A", "D", "G", "B", "e"]
  },
  UKULELE: {
    strings: 4,
    tuning: ["G", "C", "E", "A"]
  },

  INSTRUMENTS: [
    {
      strings: 6,
      tuning: ["E", "A", "D", "G", "B", "e"]
    },
    {
      strings: 4,
      tuning: ["G", "C", "E", "A"]
    }
  ],

  // COLOR
  COLOR: {
    WHITE: (255, 255, 255),
    BLACK: (0, 0, 0)
  }
};
/*type Settings = {
  frets: number,
  startingFret: number
};

type Instrument = {
  strings: number,
  tuning: Array<string>
};

type ChordName = {
  key: string,
  flat?: boolean,
  sharp?: boolean,
  aux?: string
};

// x is closed, o is open, 0 is unnumbered press, 1 ~ 4 is numbered presses
type ChordNote = {
  string: number,
  fret: number,
  barre?: number,
  finger?: string
};*/

// ========= TEMPORARY ========

let currentInstrumentIndex = 0;

const settings = {
  frets: 5,
  startingFret: 1
};

function setup() {
  createCanvas(C.WIDTH, C.HEIGHT);
}

function draw() {
  // Draw Settings
  background(C.COLOR.WHITE);
  strokeCap(PROJECT);
  ellipseMode(RADIUS);
  rectMode(CORNERS);

  // Functions
  renderNeck(settings, C.INSTRUMENTS[currentInstrumentIndex]);
  const chordNames = [
    { key: "A", sharp: true, aux: "maj7" },
    { key: "B", flat: true }
  ];
  renderChordName(chordNames);
  const chordNotes = [
    { string: 0, fret: 1, finger: "1", barre: 5 },
    { string: 2, fret: 2, finger: "2" },
    { string: 3, fret: 0 }
  ];
  renderChordNotes(chordNotes, C.INSTRUMENTS[currentInstrumentIndex], settings);
}

/**
 * Render the Neck Portion of Chord
 * @param {Object} settings - render settings
 * @param {Object} instrument - an instrument object
 */
//const renderNeck = (settings: Settings, instrument: Instrument) => {
const renderNeck = (settings, instrument) => {
  standerdizeRenderSetting();
  const { frets, startingFret } = settings;
  const { strings } = instrument;

  // Strings
  const stringSpacing = C.NECK_WIDTH / (strings - 1);
  for (let string = 0; string < strings; string++) {
    line(
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
    strokeWeight(weight);
    line(
      C.NECK_WIDTH_MARGIN + capAdjust,
      C.TOP_SPACE + fretSpacing * fret,
      C.WIDTH - C.NECK_WIDTH_MARGIN - capAdjust,
      C.TOP_SPACE + fretSpacing * fret
    );
  }
};

/**
 * Render Chord Name
 * @param {list} chordNames - list of ChordNames
 */
//const renderChordName = (chordNames: Array<ChordName>) => {
const renderChordName = chordNames => {
  standerdizeRenderSetting();
  let spacing = findTextStartingX(chordNames);
  for (const [index, chordName] of chordNames.entries()) {
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    textSize(C.TEXT_SIZE.STANDARD);
    text(`${key}`, spacing, C.TEXT_HEIGHT);
    spacing += textWidth(key);

    // Sharp Flat
    textSize(C.TEXT_SIZE.SUBTEXT);
    text(
      `${sharp ? "♯" : ""}${flat ? "♭" : ""}`,
      spacing - 20,
      C.TEXT_HEIGHT - 40
    ); // Kaz turn these into const

    // Aux Text
    if (aux) {
      text(`${aux}`, spacing, C.TEXT_HEIGHT);
      spacing += textWidth(aux);
    }

    // Add Dash
    if (chordNames.length !== 0 && index + 1 < chordNames.length) {
      textSize(C.TEXT_SIZE.STANDARD);
      text(`/`, spacing, C.TEXT_HEIGHT);
      spacing += textWidth("/");
    }
  }
};

/**
 * Find The Starting X Position
 * @param {list} chordNames - list of ChordNames
 */
// const findTextStartingX = chordNames: Array<ChordName> => {
const findTextStartingX = chordNames => {
  let x = 0;
  for (let [index, chordName] of chordNames.entries()) {
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    textSize(C.TEXT_SIZE.STANDARD);
    x += textWidth(key);
    if (aux) {
      textSize(C.TEXT_SIZE.SUBTEXT);
      x += textWidth(aux);
    }
    if (index) {
      textSize(C.TEXT_SIZE.STANDARD);
      x += textWidth("/");
    }
  }
  const startingX = (C.WIDTH - x) / 2;
  return startingX;
};

/**
 * Render Chord Notes
 * @param list - of Chord Notes
 */
//const renderChordNotes = ( chordNotes: Array<ChordNote>, instrument: Instrument, settings: Settings) => {
const renderChordNotes = (chordNotes, instrument, settings) => {
  const { strings } = instrument;
  const { frets } = settings;
  const openChords = new Array(instrument.strings).fill(false);
  const stringSpacing = C.NECK_WIDTH / (strings - 1);
  const fretSpacing = C.NECK_HEIGHT / frets;
  // Render Notes && Finger Positions
  fill(C.COLOR.BLACK);
  for (let chordNote of chordNotes) {
    const { string: noteString, fret: noteFret, finger } = chordNote;
    // Render Notes
    if (noteFret) {
      ellipse(
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
        ellipse(
          C.NECK_WIDTH_MARGIN + stringSpacing * note,
          C.TOP_SPACE + fretSpacing * (noteFret - 0.5),
          20
        ); // turn into const kaz
      }
      rect(
        C.NECK_WIDTH_MARGIN + stringSpacing * noteString,
        C.TOP_SPACE + fretSpacing * (noteFret - 1) + 28,
        C.NECK_WIDTH_MARGIN + stringSpacing * maxBarre,
        C.TOP_SPACE + fretSpacing * noteFret - 28
      ); // turn into const kaz
      for (let i = noteString; i <= maxBarre; i++) {
        openChords[i] = null;
      }
    }
  }

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
    const y = C.TOP_SPACE + fretSpacing * noteFret - 36;
    fill(C.COLOR.WHITE);
    if (finger) {
      textSize(36);
      text(finger, x, y);
    }
  }

  // Render Open/Close Note
  for (let [index, openChord] of openChords.entries()) {
    if (openChord) {
      fill(255, 255, 255);
      ellipse(
        C.NECK_WIDTH_MARGIN + stringSpacing * index,
        C.TOP_SPACE - 25,
        15
      );
    } else if (openChord === false) {
      fill(0, 0, 0);
      textSize(40);
      text(
        "X",
        C.NECK_WIDTH_MARGIN + stringSpacing * index - 13,
        C.TOP_SPACE - 10
      );
    }
  }
};

const changeInstrument = (currentInstrumentIndex, instruments) => {
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
}

const standerdizeRenderSetting = () => {
  textSize(C.TEXT_SIZE.STANDARD);
  fill(C.COLOR.BLACK);
  strokeWeight(C.LINE_WEIGHT.STANDARD);
};
