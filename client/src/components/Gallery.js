import React, { Component } from "react";

export class Gallery extends Component {
    render () {
        return (
            < div id="portfolio" >
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Project Gallery</h2>
                        <hr />
                        <p></p>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="#" data-filter="*" className="active">All</a></li>
                                    <li><a href="#" data-filter=".lawn">Lawn Care</a></li>
                                    <li><a href="#" data-filter=".garden">Garden Care</a></li>
                                    <li><a href="#" data-filter=".planting">Clean Ups</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix" />
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Pine Straw</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingpinestraw2.jpg" className="img-responsive" alt="Project Title" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Sod Installation</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingsod1.jpg" className="img-responsive" alt="Project Title" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Flower Beds</h4>
                                        </div>
                                        <img src="img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/services/oldmariettalandscapinggardencareflowerbed1.jpg.jpg" title="Flower Beds" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Flower Beds</h4>
                                        </div>
                                        <img src="img/services/oldmariettalandscapinggardencareflowerbed1.jpg" className="img-responsive" alt="Flower Beds" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn services">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/services/oldmariettalandscapingsod1.jpg" title="Sod Installation" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Sod Installation</h4>
                                        </div>
                                        <img src="img/services/oldmariettalandscapingsod1.jpg" className="img-responsive" alt="Sod Installation" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn servies">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/services/oldmariettalandscapinglawncareneil.jpg" title="Aerating and Overseeding" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Aerating and Overseeding</h4>
                                        </div>
                                        <img src="img/services/oldmariettalandscapinglawncareneil.jpg" className="img-responsive" alt="Aerating and Overseeding" />
                                    </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
};


export default Gallery;