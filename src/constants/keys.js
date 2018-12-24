/* @flow */

export const INDEX_KEYS = [
  "a",
  "ab",
  "b",
  "c",
  "cd",
  "d",
  "de",
  "e",
  "f",
  "fg",
  "g",
  "ga"
];
export const INDEX_CHORD = [
  "maj",
  "min",
  "sev",
  "m7",
  "maj7",
  "sus4",
  "fiv",
  "six"
];

// Note - Chord - Text, chordNames, ChordNotes - Guitar, Uku
const KEYS = {
  // A
  a: {
    maj: {
      text: "A",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0, finger: "0" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Am",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "3" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "A7",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 0 },
          { string: 4, fret: 2, finger: "2" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Am7",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Amaj7",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Asus4",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "A5",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1", barre: 3 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    six: {
      text: "A6",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1", barre: 5 }
        ],
        ukulele: []
      }
    }
  },

  // A Sharp / B Flat
  ab: {
    maj: {
      text: "A♯/B♭",
      chordNames: [
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
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0, finger: "0" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "A♯/B♭min",
      chordNames: [
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
          aux: "min"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "3" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "A♯/B♭",
      chordNames: [
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
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 0 },
          { string: 4, fret: 2, finger: "2" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "A♯/B♭",
      chordNames: [
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
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "A♯/B♭",
      chordNames: [
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
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "A♯/B♭",
      chordNames: [
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
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "A♯/B♭",
      chordNames: [
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
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1", barre: 3 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    six: {
      text: "A♯/B♭",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: "6"
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1", barre: 5 }
        ],
        ukulele: []
      }
    }
  },
  b: {
    text: "B",
    chordNames: [
      {
        key: "B",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  c: {
    text: "C",
    chordNames: [
      {
        key: "C",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 3, finger: "3" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 0, finger: "0" },
      { string: 4, fret: 1, finger: "1" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  cd: {
    text: "C♯/D♭",
    chordNames: [
      {
        key: "C",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  d: {
    text: "D",
    chordNames: [
      {
        key: "A",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  de: {
    text: "D♯/E♭",
    chordNames: [
      {
        key: "D",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  e: {
    text: "E",
    chordNames: [
      {
        key: "E",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  f: {
    text: "F",
    chordNames: [
      {
        key: "F",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  fg: {
    text: "F♯/G♭",
    chordNames: [
      {
        key: "F",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  g: {
    text: "G",
    chordNames: [
      {
        key: "G",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  },
  ga: {
    text: "G♯/A♭",
    chordNames: [
      {
        key: "G",
        sharp: false,
        flat: false,
        aux: ""
      }
    ],
    chordNotes: [
      { string: 1, fret: 0, finger: "0" },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "1" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0, finger: "0" }
    ]
  }
};

export default KEYS;
