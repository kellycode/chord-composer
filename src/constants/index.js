/* @flow */

// ADD TO CONSTANTS LATER
export const WIDTH = 520;
export const HOR_CENTE = WIDTH / 2;
export const HEIGHT = 680;
export const NECK_WIDTH = 360;
export const NECK_HEIGHT = 480;
export const TOP_SPACE = 150;
export const BOT_SPACE = 40;
export const NECK_WIDTH_MARGIN = (WIDTH - NECK_WIDTH) / 2;

export const TEXT_HEIGHT = 105;
export const TEXT_SIZE = {
  STANDARD: 100,
  SUBTEXT: 50
};
export const LINE_WEIGHT = {
  STANDARD: 4,
  THICK: 10
};
export const CAP_ADJUST = {
  STANDARD: 0,
  THICK: 3
};

// Instruments
export const GUITAR = {
  text: "guitar",
  strings: 6,
  tuning: ["E", "A", "D", "G", "B", "e"]
};
export const UKULELE = {
  text: "ukulele",
  strings: 4,
  tuning: ["G", "C", "E", "A"]
};

export const INSTRUMENTS = [GUITAR, UKULELE];

// COLOR
export const COLOR = {
  WHITE: (255, 255, 255),
  BLACK: (0, 0, 0)
};
