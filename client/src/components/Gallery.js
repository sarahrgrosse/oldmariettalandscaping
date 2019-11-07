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
                                    <li><a href="#" data-filter=".pine">Pine Straw and Mulch</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix" />
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapinglawncarejoe.jpg" title="Lawn Care" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lawn Care</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapinglawncarejoe.jpg" className="img-responsive" alt="Lawn Care" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapingsod2.jpg" title="Sod Installation" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Sod Installation</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingsod2.jpg" className="img-responsive" alt="Sod Installation" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 pine">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapingpinestraw1.jpg" title="Pine Straw and Mulch" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Pine Straw and Mulch</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingpinestraw1.jpg" className="img-responsive" alt="Pine Straw and Mulch" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapingflowerbed5.jpg" title="Flower Beds" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Flower Beds</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingflowerbed5.jpg" className="img-responsive" alt="Flower Bed" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapingfountainflowerbed3.jpg" title="Flower Beds" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Flower Beds</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingfountainflowerbed3.jpg" className="img-responsive" alt="Flower Beds" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapingflowerbed4.jpg" title="Flower Beds" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Flower Beds</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingflowerbed4.jpg" className="img-responsive" alt="Flower Bed" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/oldmariettalandscapingflowerbed1.jpg" title="Flower Beds" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Flower Beds</h4>
                                        </div>
                                        <img src="img/portfolio/oldmariettalandscapingflowerbed1.jpg" className="img-responsive" alt="Flower Bed" />
                                    </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
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