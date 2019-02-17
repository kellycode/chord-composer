/* @flow */

export type Instrument = {
  strings: number,
  tuning?: Array<string>
};

export type Settings = {
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

export type ChordNote = {
  string: number,
  fret: number,
  barre?: number,
  finger?: string
};

export type ExtraName = boolean;

export type State = {
  chordNotes: Array<ChordNote>,
  chordNames: Array<ChordName>,
  custom: boolean,
  settings: Settings,
  currentKey: ?string,
  currentChord: ?string,
  customExtraName: ExtraName,
  customChordNotes: Array<ChordNote>,
  customChordNames: Array<ChordName>,
  customSettings: Settings
};
