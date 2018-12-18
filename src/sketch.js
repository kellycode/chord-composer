// ADD TO CONSTANTS LATER
const WIDTH = 480;
const HOR_CENTER = WIDTH / 2;
const HEIGHT = 660;
const NECK_WIDTH = 360;
const TEXT_HEIGHT = 85;
const NECK_HEIGHT = 480;
const TOP_SPACE = 140;
const BOT_SPACE = 40;
const NECK_WIDTH_MARGIN = (WIDTH - NECK_WIDTH) / 2;

const TEXT_SIZE = 100;
const SUBTEXT_SIZE = 50;

// Kaz turn these into structs
const guitar = {
  strings: 6,
  tuning: ["E", "A", "D", "G", "B", "e"]
};

const ukulele = {
  strings: 4,
  tuning: ["G", "C", "E", "A"]
};

const instruments = [guitar, ukulele];
let currentInstrumentIndex = 0;

const settings = {
  frets: 5,
  startingFret: 1
};

// group objects
const chordName = {
  key: "",
  flat: false,
  sharp: false,
  aux: ""
};

// x is closed, o is open, 0 is unnumbered press, 1 ~ 4 is numbered presses
const chordNote = {
  string: 0,
  fret: 0,
  barre: null,
  finger: null
};

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  // Draw Settings
  background(255, 255, 255);
  strokeCap(PROJECT);
  ellipseMode(RADIUS);
  rectMode(CORNERS);

  // Functions
  renderNeck(settings, instruments[currentInstrumentIndex]);
  const chordNames = [
    { key: "A", sharp: true, aux: "maj7" },
    { key: "B", flat: true }
  ];
  renderChordName(chordNames);
  const chordNotes = [
    { string: 0, fret: 1, finger: 1, barre: 5 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 0 }
  ];
  renderChordNotes(chordNotes, instruments[currentInstrumentIndex], settings);
}

const renderNeck = (settings, instrument) => {
  const { strings } = instrument;
  const stringSpacing = NECK_WIDTH / (strings - 1);
  for (let string = 0; string < strings; string++) {
    line(
      NECK_WIDTH_MARGIN + stringSpacing * string,
      TOP_SPACE,
      NECK_WIDTH_MARGIN + stringSpacing * string,
      HEIGHT - BOT_SPACE
    );
  }

  //Frets
  const { frets, startingFret } = settings;
  let fretSpacing = NECK_HEIGHT / frets;
  for (let fret = 0; fret <= frets; fret++) {
    let weight = 4;
    let capAdjust = 0;
    if (fret === 0 && startingFret === 1) {
      weight = 10;
      capAdjust = 3;
    }
    strokeWeight(weight);
    line(
      NECK_WIDTH_MARGIN + capAdjust,
      TOP_SPACE + fretSpacing * fret,
      WIDTH - NECK_WIDTH_MARGIN - capAdjust,
      TOP_SPACE + fretSpacing * fret
    );
  }
};

/**
 * Render Chord Name
 * @param list - of chord names
 */
const renderChordName = chordNames => {
  fill(0, 0, 0);
  let spacing = findTextStartingX(chordNames);
  let dash = 0;
  for (let chordName of chordNames) {
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    textSize(TEXT_SIZE);
    text(`${key}`, spacing, TEXT_HEIGHT);
    spacing = spacing + textWidth(key);
    // Sharp Flat
    let pitch = "";
    textSize(SUBTEXT_SIZE);
    if (sharp && flat) {
      throw Error("Can't be sharp and flat at the same time!");
    } else if (sharp) {
      pitch = pitch.concat("♯");
    } else if (flat) {
      pitch = pitch.concat("♭");
    }
    text(`${pitch}`, spacing - 20, TEXT_HEIGHT - 40); // Kaz turn these into const
    // Aux Text
    if (aux) {
      text(`${aux}`, spacing, TEXT_HEIGHT);
      spacing = spacing + textWidth(aux);
    }
    if (chordNames.length !== 0 && dash + 1 < chordNames.length) {
      textSize(TEXT_SIZE);
      text(`/`, spacing, TEXT_HEIGHT);
      spacing = spacing + textWidth("/");
    }
    dash++;
  }
};

const findTextStartingX = chordNames => {
  let x = 0;
  let dash = 0;
  for (let chordName of chordNames) {
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    textSize(TEXT_SIZE);
    x = x + textWidth(key);
    if (aux) {
      textSize(SUBTEXT_SIZE);
      x = x + textWidth(aux);
    }
    if (dash) {
      textSize(TEXT_SIZE);
      x = x + textWidth("/");
    }
    dash++;
  }
  const startingX = (WIDTH - x) / 2;
  return startingX;
};

/**
 * Render Chord Notes
 * @param list - of Chord Notes
 */
const renderChordNotes = (chordNotes, instrument, settings) => {
  const { strings } = instrument;
  const { frets } = settings;
  const openChords = new Array(instrument.strings).fill(false);
  const stringSpacing = NECK_WIDTH / (strings - 1);
  const fretSpacing = NECK_HEIGHT / frets;
  // Render Notes && Finger Positions
  for (let chordNote of chordNotes) {
    const { string: noteString, fret: noteFret, finger, barre } = chordNote;
    fill(0, 0, 0);
    // Render Notes
    if (noteFret > 0) {
      ellipse(
        NECK_WIDTH_MARGIN + stringSpacing * noteString,
        TOP_SPACE + fretSpacing * (noteFret - 0.5),
        20
      ); // turn into const kaz
    }
    if (noteFret === 0) {
      openChords[noteString] = true;
    } else if (!openChords[noteString]) {
      openChords[noteString] = null;
    }
  }
  // Render Barre
  for (let chordNote of chordNotes) {
    const { string: noteString, fret: noteFret, barre } = chordNote;
    fill(0, 0, 0);
    if (barre) {
      for (let note of [noteString, barre]) {
        ellipse(
          NECK_WIDTH_MARGIN + stringSpacing * note,
          TOP_SPACE + fretSpacing * (noteFret - 0.5),
          20
        ); // turn into const kaz
      }
      rect(
        NECK_WIDTH_MARGIN + stringSpacing * noteString,
        TOP_SPACE + fretSpacing * (noteFret - 1) + 28,
        NECK_WIDTH_MARGIN + stringSpacing * barre,
        TOP_SPACE + fretSpacing * noteFret - 28
      ); // turn into const kaz
      for (let i = noteString; i <= barre; i++) {
        openChords[i] = null;
      }
    }
  }

  for (let chordNote of chordNotes) {
    const { string: noteString, finger, barre } = chordNote;
    fill(0, 0, 0);
    if (finger) {
      textSize(40);
      text(finger, NECK_WIDTH_MARGIN + stringSpacing * noteString - 13, HEIGHT);
    }
  }

  // Render Open/Close Note
  let stringNum = 0;
  for (let openChord of openChords) {
    if (openChord) {
      fill(255, 255, 255);
      ellipse(
        NECK_WIDTH_MARGIN + stringSpacing * stringNum,
        TOP_SPACE - 25,
        15
      );
    } else if (openChord === false) {
      fill(0, 0, 0);
      textSize(40);
      text(
        "X",
        NECK_WIDTH_MARGIN + stringSpacing * stringNum - 13,
        TOP_SPACE - 10
      );
    }
    stringNum++;
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
    instruments
  );
}
