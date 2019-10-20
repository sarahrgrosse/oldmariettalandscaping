import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "../src/components/Contact";
import Carousel from "../src/components/Carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      //Kayley adding the divs for the Carousel and Contact components
      <div>
        <Carousel />
      </div>
      <div>
        <Component />
      </div>
    )
  }
}

export default App;
