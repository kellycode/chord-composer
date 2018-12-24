import React, { Component } from "react";

import P5Wrapper from "./components/P5Wrapper";
import Adjusters from "./components/Adjusters";

class App extends Component {
  render() {
    return (
      <>
        <P5Wrapper />
        <Adjusters />
      </>
    );
  }
}

export default App;
