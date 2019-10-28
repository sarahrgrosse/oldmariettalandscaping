import React, { Component } from "react";

export class Services extends Component {
    render () {
        return (
            <div id="services">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title text-center">
                        <h2>Our Services</h2>
                        <hr />
                        <p>We offer a wide range of services from award winning maintenance, landscape design, and installations.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-1.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Lawn Care</h3>
                                <p>Basic bi-weekly lawn maintenance to full service.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-2.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Landscape Design</h3>
                                <p>Over grown diamonds in the rough to new construction, let us help you reach your design goals.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-3.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Tree Service</h3>
                                <p>Limbing, clearing, and stump grinding.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-4.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Fall Cleanup</h3>
                                <p>Fall leaf cleanup and removal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Services;