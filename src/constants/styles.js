/* @flow */
import { PALETTE } from "./palette";

const DEFAULT_STYLE = {
  button: {
    backgroundColor: PALETTE.teal,
    borderRadius: 3,
    border: "none",
    color: PALETTE.white,
    flex: 1,
    fontWeight: "bold",
    margin: 5
  },
  border: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderColor: PALETTE.tealLight,
    borderStyle: "solid",
    borderWidth: 3,
    padding: 10
  }
};

export default DEFAULT_STYLE;
