import React, { Component } from "react";
import { connect } from "react-redux";
import { INDEX_KEYS, INDEX_CHORD } from "../../../constants/keys";
import actionTypes from "../../../redux/actionTypes";

class ChangeKeyButtons extends Component {
  changeKey = key => {
    this.props.dispatch({
      type: actionTypes.CHANGE_KEY,
      key
    });
  };

  changeChord = chord => {
    this.props.dispatch({
      type: actionTypes.CHANGE_CHORD,
      chord
    });
  };

  render() {
    return (
      <div>
        {INDEX_KEYS.map(key => (
          <button onClick={() => this.changeKey(key)}>{key}</button>
        ))}
        {INDEX_CHORD.map(chord => (
          <button onClick={() => this.changeChord(chord)}>{chord}</button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ChangeKeyButtons);
