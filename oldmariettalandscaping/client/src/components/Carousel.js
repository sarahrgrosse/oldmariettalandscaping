import React, { Component } from "react";

export class Carousel extends Component {

    render() {
        return(
        <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div className="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div className="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div className="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div className="item">
              <p>Kayley broke her branch</p>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Carousel;

