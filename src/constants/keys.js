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
          { string: 5, fret: 0 }
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
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3", barre: 4 }
        ],
        ukulele: []
      }
    },
    min: {
      text: "A♯/B♭m",
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
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" },
          { string: 4, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "A♯/B♭7",
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
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "A♯/B♭m7",
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
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 4, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "A♯/B♭maj7",
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
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "A♯/B♭sus4",
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
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3", barre: 3 },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "A♯/B♭5",
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
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "A♯/B♭6",
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
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3", barre: 5 }
        ],
        ukulele: []
      }
    }
  },

  // B
  b: {
    maj: {
      text: "B",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3", barre: 4 }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Bm",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" },
          { string: 4, fret: 3, finger: "2" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "B7",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Bm7",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 4, fret: 3, finger: "2" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Bmaj7",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 3, finger: "2" },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Bsus4",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3", barre: 3 },
          { string: 4, fret: 5, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "B5",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "B6",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3", barre: 5 }
        ],
        ukulele: []
      }
    }
  },

  // C
  c: {
    maj: {
      text: "C",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Cm",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 5 },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" },
          { string: 4, fret: 4, finger: "2" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "C7",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 3, finger: "4" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Cm7",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 5 },
          { string: 2, fret: 5, finger: "3" },
          { string: 4, fret: 4, finger: "2" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Cmaj7",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Csus4",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1", barre: 5 }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "C5",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1" },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "C6",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1" },
          { string: 2, fret: 5, finger: "3", barre: 5 }
        ],
        ukulele: []
      }
    }
  },

  // C Sharp / D Flat
  cd: {
    maj: {
      text: "C♯/D♭",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3", barre: 4 }
        ],
        ukulele: []
      }
    },
    min: {
      text: "C♯/D♭m",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" },
          { string: 4, fret: 5, finger: "2" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "C♯/D♭7",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "C♯/D♭m7",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 4, fret: 5, finger: "2" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "C♯/D♭maj7",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 5, finger: "2" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "C♯/D♭sus4",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3", barre: 3 },
          { string: 4, fret: 7, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "C♯/D♭5",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "C♯/D♭6",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3", barre: 5 }
        ],
        ukulele: []
      }
    }
  },

  // D
  d: {
    maj: {
      text: "D",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Dm",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 1, finger: "1" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "D7",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 2, finger: "3" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Dm7",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 1, finger: "1", barre: 5 }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Dmaj7",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1", barre: 5 }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Dsus4",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "D5",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 3, finger: "3" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "D6",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 0 },
          { string: 5, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    }
  },

  // D Sharp / E Flat
  de: {
    maj: {
      text: "D♯/E♭",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3", barre: 4 }
        ],
        ukulele: []
      }
    },
    min: {
      text: "D♯/E♭m",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 8, finger: "4" },
          { string: 4, fret: 7, finger: "2" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "D♯/E♭7",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 4, fret: 8, finger: "4" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "D♯/E♭m7",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 4, fret: 7, finger: "2" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "D♯/E♭maj7",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 7, finger: "2" },
          { string: 4, fret: 8, finger: "4" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "D♯/E♭sus4",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3", barre: 3 },
          { string: 4, fret: 9, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "D♯/E♭5",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 8, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "D♯/E♭6",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3", barre: 5 }
        ],
        ukulele: []
      }
    }
  },

  // E
  e: {
    maj: {
      text: "E",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Em",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "E7",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Em7",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Emaj7",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "3", barre: 5 }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Esus4",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 2, finger: "4" },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "E5",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1", barre: 2 }
        ],
        ukulele: []
      }
    },
    six: {
      text: "E6",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 2, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    }
  },

  // F
  f: {
    maj: {
      text: "F",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 3, finger: "4" },
          { string: 3, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Fm",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "F7",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 3, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Fm7",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Fmaj7",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 2, finger: "4" },
          { string: 4, fret: 1, finger: "2" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Fsus4",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "2" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "F5",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "F6",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: null },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    }
  },

  // F Sharp / G Flat
  fg: {
    maj: {
      text: "F♯/G♭",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 4, finger: "4" },
          { string: 3, fret: 3, finger: "2" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "F♯/G♭m",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "F♯/G♭7",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 3, fret: 3, finger: "2" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "F♯/G♭m7",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "F♯/G♭maj7",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" },
          { string: 4, fret: 2, finger: "2" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "F♯/G♭sus4",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "2" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "F♯/G♭5",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1" },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "F♯/G♭6",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: null },
          { string: 3, fret: 3, finger: "1" },
          { string: 4, fret: 4, finger: "1" }
        ],
        ukulele: []
      }
    }
  },

  // G
  g: {
    maj: {
      text: "G",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "2" },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 3, finger: "3" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "Gm",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "3" },
          { string: 2, fret: 5, finger: "4" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "G7",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 1, finger: "1" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "Gm7",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "3" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "Gmaj7",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" },
          { string: 4, fret: 3, finger: "2" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "Gsus4",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "G5",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1" },
          { string: 1, fret: 5, finger: "3" },
          { string: 2, fret: 5, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "G6",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    }
  },

  // G Sharp / A Flat
  ga: {
    maj: {
      text: "G♯/A♭",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 6, finger: "4" },
          { string: 3, fret: 5, finger: "2" }
        ],
        ukulele: []
      }
    },
    min: {
      text: "G♯/A♭m",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    sev: {
      text: "G♯/A♭7",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 3, fret: 5, finger: "2" }
        ],
        ukulele: []
      }
    },
    m7: {
      text: "G♯/A♭m7",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" }
        ],
        ukulele: []
      }
    },
    maj7: {
      text: "G♯/A♭maj7",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1" },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" },
          { string: 4, fret: 4, finger: "2" }
        ],
        ukulele: []
      }
    },
    sus4: {
      text: "G♯/A♭sus4",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "2" },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    fiv: {
      text: "G♯/A♭5",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1" },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    six: {
      text: "G♯/A♭6",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: null },
          { string: 3, fret: 5, finger: "2" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    }
  }
};

export default KEYS;
