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
                                        <p>"What seperates this company from many other small businesses, is their responsiveness. Neil Grosse showed up when he said he would, actually, he was early! Mr. Grosse's bid was not the lowest, but I felt he was worth the extra money. He proved worthy of my confidence. He's worthy of your confidence too.</p>
                                        <p>- Maureen Lawton Berry</p>
                                    </div>
                                    <div className="item">
                                        <p>"We recommend your service to all our friends and family because not only is the job you're doing giving us quality time with the family but the work you do is excellent!"</p>
                                        <p>- Naomi Jean Gasson</p>
                                    </div>
                                    <div className="item">
                                        <p>"Amazing work and turn around. Couldn't imagine a better looking yard, thank you!"</p>
                                        <p>- Brooke Morse</p>
                                    </div>
                                    <div className="item">
                                        <p>"Neil Grosse is very knowledgeable."</p>
                                        <p>- Michael Carver</p>
                                    </div>
                                    <div className="item">
                                        <p>"These guys do it right, the old fashioned way. They know what they are doing!"</p>
                                        <p>- Doc Roberts</p>
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