import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import LoginLanding from "../LoginLanding";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div id="customer" className="text-center">
        <div className="container">
          <div className="section-title text-center">
            <div id="dash">
              <h2>Customer Portal</h2>
              <hr></hr>
            </div>
            <h2>
              <b>Hey There,</b> {user.name.split(" ")[0]}
              <br></br>
              <p className="flow-text grey-text text-darken-1">
                Welcome to Old Marietta Landscaping {" "}
                <span style={{ fontFamily: "monospace" }}>Customer</span> Portal
              </p>
              </h2>
              <hr></hr>
              <br></br>
              <h4>To Schedule an Appointment, Please Click Below</h4>
              <br></br>
              <LoginLanding />
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-custom btn-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);