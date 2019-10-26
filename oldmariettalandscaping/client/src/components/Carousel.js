import React, { Component } from "react";

export class Carousel extends Component {

    render() {
        return(
        <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div id="testimonial" class="owl-carousel owl-theme">
            <div class="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div class="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div class="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
            <div class="item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Carousel;

