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
    borderRadius: 5,
    boxShadow: "0px 0px 15px #196472",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10
  },
  title: {
    alignSelf: "flex-start",
    color: PALETTE.title,
    fontWeight: "normal",
    margin: 5,
    marginBottom: 8,
    transform: "scaleY(1.2)"
  }
};

export default DEFAULT_STYLE;
