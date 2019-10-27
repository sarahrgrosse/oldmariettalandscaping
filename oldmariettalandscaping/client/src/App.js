import React, { Component } from "react";
import "./App.css";
import Testimonials from "../src/components/Testimonials";
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
          <Nav />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Customer />
        </div>
        <div>
          <Footer />
        </div>
        </div>
    );
  }
}

export default App;
