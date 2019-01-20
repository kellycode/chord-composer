/* @flow */

export type Instrument = {
  strings: number,
  tuning: Array<string>
};

export type Settings = {
  custom?: boolean,
  frets: number,
  instrument: Instrument,
  startingFret: number
};

export type ChordName = {
  key: string,
  flat?: boolean,
  sharp?: boolean,
  aux?: string
};

// x is closed, o is open, 0 is unnumbered press, 1 ~ 4 is numbered presses
export type ChordNote = {
  string: number,
  fret: ?number,
  barre?: number,
  finger?: string
};
