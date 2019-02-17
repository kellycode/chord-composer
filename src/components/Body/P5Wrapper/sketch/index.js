/* @flow */
import * as CONST from "../../../../constants";
import * as tools from "./sketch";

/**
 * Main P5JS Rendering Sketch
 * @param {Sketch} sketch - P5JS Sketch
 */
export default function(sketch: any) {
  sketch.onSetAppState = () => {};

  sketch.setup = function() {
    sketch.createCanvas(CONST.WIDTH, CONST.HEIGHT);
  };

  sketch.draw = function() {
    // Preset Settings
    sketch.background(CONST.COLOR.white);
    sketch.strokeCap(sketch.PROJECT);
    sketch.ellipseMode(sketch.RADIUS);
    sketch.rectMode(sketch.CORNERS);

    // Functions
    const { custom } = sketch.props;
    // Standard
    if (!custom) {
      const { chordNames, chordNotes, settings } = sketch.props;
      const presetSettings = tools.applyPresetSettings(settings, chordNotes);
      tools.renderNeck(sketch, presetSettings);
      tools.renderChordName(sketch, chordNames);
      tools.renderChordNotes(sketch, chordNotes, presetSettings);
      tools.renderStartingFretText(sketch, presetSettings);

      // Custom
    } else {
      const {
        customChordNames,
        customChordNotes,
        customSettings
      } = sketch.props;
      tools.renderNeck(sketch, customSettings);
      tools.renderChordName(sketch, customChordNames);
      tools.renderChordNotes(sketch, customChordNotes, customSettings);
      tools.renderStartingFretText(sketch, customSettings);
    }
  };
}
