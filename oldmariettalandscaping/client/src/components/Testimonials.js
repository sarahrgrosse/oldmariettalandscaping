import React, { Component } from "react";

export class Testimonials extends Component {
    render () {
        return (
            <div id="testimonials" className="text-center">
                <div className="overlay">
                    <div className="container">
                        <div className="section-title">
                            <h2>Testimonials</h2>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div id="testimonial" className="owl-carousel owl-theme">
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed
                      commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- John DOE, Parker County, TX</p>
                                    </div>
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed
                      commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- Jenny DOE, Parker County, TX</p>
                                    </div>
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed
                      commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- John DOE, Parker County, TX</p>
                                    </div>
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed
                      commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- John DOE, Parker County, TX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Testimonials;