import * as C from "../../../../constants";
import * as tools from "./sketch";

export default function(s) {
  s.onSetAppState = () => {};

  s.setup = function() {
    s.createCanvas(C.WIDTH, C.HEIGHT);
  };

  s.draw = function() {
    s.background(C.COLOR.WHITE);
    s.strokeCap(s.PROJECT);
    s.ellipseMode(s.RADIUS);
    s.rectMode(s.CORNERS);

    // Functions
    const { custom } = s.props;
    const {
      customChordNames,
      customChordNotes,
      customSettings,
      chordNames,
      chordNotes,
      settings
    } = s.props;
    const presetSettings = tools.applyPresetSettings(
      settings,
      custom ? customChordNotes : chordNotes
    );
    tools.renderNeck(s, custom ? customSettings : presetSettings);
    tools.renderChordName(s, custom ? customChordNames : chordNames);
    tools.renderChordNotes(
      s,
      custom ? customChordNotes : chordNotes,
      custom ? customSettings : presetSettings
    );
    tools.renderFret(s, custom ? customSettings : presetSettings);
  };
}
