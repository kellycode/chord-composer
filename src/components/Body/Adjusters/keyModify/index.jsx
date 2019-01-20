/* @flow */
import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_KEYS, INDEX_CHORD } from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";

const style = {
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: PALETTE.teal,
    borderRadius: 0,
    border: "none",
    color: PALETTE.white,
    flex: 1,
    margin: 5,
    padding: "10px 15px 10px 15px"
  }
};

type Props = Dispatch;

class KeyModifiers extends Component<Props> {
  changeChord = chord => {
    this.props.dispatch({
      type: actionTypes.CHANGE_CHORD,
      chord
    });
  };

  render() {
    return (
      <div>
        {INDEX_CHORD.map((chord, index) => {
          return (
            <button
              onClick={() => this.changeChord(chord)}
              key={chord}
              style={style.button}
            >
              {chord}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(KeyModifiers);
