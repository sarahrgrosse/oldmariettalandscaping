import React, { Component } from "react";

export class Footer extends Component {
    render() {
    return (
    <div id="footer">
  <div className="container text-center">
    <div className="col-md-8 col-md-offset-2">
      <div className="social">
        <ul>
          <li><a href="https://www.facebook.com/oldmariettalandscaping/"><i className="fa fa-facebook" /></a></li>
        </ul>
      </div>
      <p>© 2019 Old Marietta Landscape.</p>
    </div>
  </div>
</div>
    );
    }
};

export default Footer;
