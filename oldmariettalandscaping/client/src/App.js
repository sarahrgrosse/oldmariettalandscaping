import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Testimonials from "../src/components/Testimonials";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav";
import Customer from "../src/components/Customer";
import Register from "../src/components/CustomerPortal/auth/Register";
import Login from "../src/components/CustomerPortal/auth/Login";
import PrivateRoute from "../src/components/private-route/PrivateRoute";
import Dashboard from "../src/components/dashboard/Dashboard";
import Services from "../src/components/Services";
import Gallery from "../src/components/Gallery";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
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
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <div>
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </Provider >
    );
  }
}

export default App;
