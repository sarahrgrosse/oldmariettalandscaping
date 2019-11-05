import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import "./App.css";
import Testimonials from "../src/components/Testimonials";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav";
import Customer from "../src/components/Customer";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Services from "../src/components/Services";
import Gallery from "../src/components/Gallery";
import AccountHome from "../src/components/AccountHome";

class App extends Component {
  render () {
    return (
      // // <Provider store={store}>
      //   <Router>
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Gallery />
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
          <Login />
        </div>
        <div>
          <Register />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      // </Router>
      // </Provider>
    );
  }
}

export default App;
