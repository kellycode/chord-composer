/* @flow */
import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const style = {
  global: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%"
  }
};

/**
 * App
 */
const App = () => {
  return (
    <div style={style.global}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
