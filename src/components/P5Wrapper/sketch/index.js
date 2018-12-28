import * as C from "../../../constants";
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
    tools.renderNeck(s, s.props.settings, s.props.instrument);
    tools.renderChordName(s, s.props.chordNames);
    tools.renderChordNotes(
      s,
      s.props.chordNotes,
      s.props.instrument,
      s.props.settings
    );
  };
}