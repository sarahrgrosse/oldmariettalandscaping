import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
// import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div id="custportal" className="text-center">
        <div className="overlay">
          <div className="container">
            <h2>Customer Login</h2>
            <hr />
            <p></p>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <p className="grey-text text-darken-1"><strong>
                  Don't Have an Account?</strong> <a href="/register" id="backHome"><strong>Register Here</strong></a>
                </p>
                <a href="/" id="backHome">Back to
                  Home
            </a>
                <hr></hr>

                <form Validate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <div className="form-group">
                        <input
                          // className="form-control"
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          placeholder="Email"
                          className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                          })}
                          required />
                        <p className="help-block text-danger"></p>
                        <span className="red-text">
                          {errors.email}
                          {errors.emailnotfound}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      placeholder="Password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                      required
                    />
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div className="col s12" style={{ padding: "11.250px" }}>
                    <button id="customerLogin"
                      type="submit"
                      className="btn btn-custom btn-sm"
                    >
                      Login
                </button>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);