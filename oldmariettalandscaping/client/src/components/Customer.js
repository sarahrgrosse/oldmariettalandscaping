import React, { Component } from "react";

export class Customer extends Component {

render() {
    return (
        <div id="customer" className="text-center">
        <div className="container">
          <div className="section-title text-center">
              <h2>Customer Login</h2>
          <form name="sentMessage" id="contactForm" novalidate>
                <div className="row">

                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  </div>
                  <div className="row">

              <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Password" required="required" />
                    </div>
                  </div>
                  </div>

                  </form> 
                  <button type="submit" class="btn btn-custom btn-lg" href="./AccountHome.js">Login</button>                
                   </div>
        </div>
        </div>
    )
}
}

export default Customer;