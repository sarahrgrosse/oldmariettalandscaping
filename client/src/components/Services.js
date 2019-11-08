import React, { Component } from "react";

export class Services extends Component {
    render () {
        return (
            <div id="services">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title text-center">
                        <h2>Our Services</h2>
                        <hr />
                        <p>We offer a wide range of services from award winning maintenance, landscape design, and instillations.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/BOC2018.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Lawn Care</h3>
                                <p>Award winning bi-weekly, basic to full service lawn maintenance.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/oldmariettalandscapinggardencare.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Landscape Design</h3>
                                <p>Over grown diamonds in the rough to new construction, let us help you reach your design goals.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/oldmariettalandscapingtreeservice1.jpg" alt="tree service clearing limbing stump gringing removal" /> </div>
                            <div className="service-desc">
                                <h3>Tree Service</h3>
                                <p>Limbing, clearing, and stump grinding.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/oldmariettalandscapingblackmulch2.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Pine Straw and Mulch</h3>
                                <p>We offer a variety of pine straw and mulch. From long needle or slash pinestraw to black, brown, cypress, red, pine-bark, and playsafe mulch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Services;