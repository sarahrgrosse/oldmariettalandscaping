import React, { Component } from "react";

export class Footer extends Component {
    render() {
    return (
    <div id="footer">
  <div className="container text-center">
    <div className="col-md-8 col-md-offset-2">
      <div className="social">
        <ul>
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
        </ul>
      </div>
      <p>© 2019 Old Marietta Landscape. Template compimentary of <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
    </div>
  </div>
</div>
    );
    }
};

export default Footer;
