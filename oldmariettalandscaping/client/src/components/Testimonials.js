import React, { Component } from "react";

export class Testimonials extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div id="testimonial"
                        className="owl-carousel owl-theme">
                        <div className="item">
                            <p>"What seperates this company from many other small businesses is their responsiveness. Neil Grosse showed up when he said he would, actually, he was early. In my experience in dealing with small businesses this is unusual. Mr. Grosse's bid was not the lowest, but I felt he was worth the extra money and he proved worth of my confidence. He's worthy of your confidence too. -Maureen Lawton Berry</p>
                        </div>
                        <div className="item">
                            <p>We recommend your service to all our friends and family because not only is the job you're doing giving us quality family time back but the work you do is excellent and so is the clean up! Thank you! We appreciate it so much! -Naomi Jean Gasson</p>
                        </div>
                        <div className="item">
                            <p>Amazing work and turn around. Couldn't imagine a better looking yard, thank you! -Brooke Morse</p>
                        </div>
                        <div className="item">
                            <p>Neil Grosse is very Knowledgeable. -Michael Carver</p>
                        </div>
                        <div className="item">
                            <p>These guys do it right, the old fashioned way. They know what they are doing! -Doc Roberts</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Testimonials;