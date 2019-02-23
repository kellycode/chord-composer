/* @flow */
import React from "react";
import { SocialIcon } from "react-social-icons";
import codic from "../../../static/icons/codic-vorfreude.png";

const styles = {
  socialMedia: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    padding: 10
  },
  socialIcon: {
    margin: 5
  },
  webIcon: {
    height: 40,
    margin: 5
  }
};

/**
 * Social Media
 */
const SocialMedia = () => {
  return (
    <div style={styles.socialMedia}>
      <div style={styles.iconWrapper}>
        <SocialIcon
          style={styles.socialIcon}
          url="https://twitter.com/aSublimAaddict"
        />
        <SocialIcon
          style={styles.socialIcon}
          url="https://github.com/hirokazutei/chord-gen"
        />
        <SocialIcon
          style={styles.socialIcon}
          url="https://www.linkedin.com/in/hirokazutei/"
        />
        <img src={codic} style={styles.webIcon} alt="Codic-Vorfreude" />
      </div>
    </div>
  );
};

export default SocialMedia;
