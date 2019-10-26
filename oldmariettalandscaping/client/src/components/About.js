import React from "react";
import "./style.css";

function AboutUs(props) {
    return (
        <div id="about">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <div className="about-text">
          <h2>Welcome to <span>Landscaper</span></h2>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <a href="#services" className="btn btn-custom btn-lg page-scroll">View All Services</a> </div>
      </div>
      <div className="col-xs-12 col-md-3">
        <div className="about-media"> <img src="img/about-1.jpg" alt=" "> </div>
        <div className="about-desc">
          <h3>Garden Care</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis.</p>
        </div>
      </div>
      <div className="col-xs-12 col-md-3">
        <div className="about-media"> <img src="img/about-2.jpg" alt=" "> </div>
        <div className="about-desc">
          <h3>Lawn Care</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}