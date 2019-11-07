import React, { Component } from "react";

export class Header extends Component {
    render () {
        return (

            <header id="header">
              <div className="intro">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text">
                        <h1>Old Marietta Landscaping</h1>
                        <p>Serving Cobb County and Surrounding Areas</p>
                        <a href="#about" className="btn btn-custom btn-lg page-scroll">More Info</a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          );
        }
      }

      export default Header;