/* @flow */
import React from "react";
import { PALETTE } from "../../constants/palette";
import DEFAULT_STYLE from "../../constants/styles";
import logo from "../../static/icons/ChordGenFaviconw.png";
import SocialMedia from "./SocialMedia";

const styles = {
  header: {
    backgroundColor: PALETTE.header,
    boxShadow: "0px 0px 20px #196472",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 50,
    paddingBottom: 10
  },
  title: {
    ...DEFAULT_STYLE.title,
    alignSelf: "flex-end",
    color: PALETTE.white,
    fontSize: 35
  },
  webIcon: {
    height: 50,
    marginRight: 10
  }
};

/**
 * Header
 */
const Header = () => {
  return (
    <div style={styles.header}>
      <img src={logo} style={styles.webIcon} alt="github" />
      <h1 style={styles.title}>chord-gen</h1>
      <SocialMedia />
    </div>
  );
};

export default Header;
