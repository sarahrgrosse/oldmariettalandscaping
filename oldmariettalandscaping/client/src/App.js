import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "../src/components/Carousel";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav";

class App extends Component {
  render() {
    return (
        <div>
        <div>
          <Nav />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
        </div>
    );
  }
}

export default App;
