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
    backgroundColor: PALETTE.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10
  },
  title: {
    color: PALETTE.white,
    fontWeight: 30
  }
};

export default DEFAULT_STYLE;
