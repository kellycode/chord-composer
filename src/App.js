import React, { Component } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const style = {
  global: {
    height: "100%",
    width: "100%"
  }
};

class App extends Component {
  render() {
    return (
      <div style={style.global}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
