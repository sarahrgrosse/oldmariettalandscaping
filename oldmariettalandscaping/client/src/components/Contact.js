import React, { Component } from "react";

export class Contact extends Component {

  render () {
    return (
      <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title text-center">
            <h2>Contact Us</h2>
            <hr />
            <p>You can set up a complimentary estimate by calling us directly, emailing us, or by leaving a message here! We look forward to meeting with you!</p>
          </div>
          <div className="col-md-10 col-md-offset-1 contact-info">
            <div className="col-md-4">
              <h3>Address</h3>
              <hr />
              <div className="contact-item">
                <p>1098 New Haven Drive</p>
                <p>Marietta, Ga. 30064</p>
              </div>
            </div>

            <div className="col-md-4">
              <h3>Working Hours</h3>
              <hr />
              <div className="contact-item">
                <p>Monday-Saturday: 6 AM - 5 PM</p>
                <p>Sunday: 11 AM - 12 PM</p>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Contact Info</h3>
              <hr />
              <div className="contact-item">
                <p>(770) 255-8709</p>
                <p>oldmariettalandscaping@gmail.com</p>
              </div>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <h3>Leave us a message</h3>
              <form name="sentMessage" id="contactForm" novalidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" class="btn btn-custom btn-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;