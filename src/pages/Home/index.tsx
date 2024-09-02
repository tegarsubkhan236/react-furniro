import {PageFooter, PageHeader, PageHeroImage} from "../../components";
import Category1 from "../../assets/img/category-1.png"
import Category2 from "../../assets/img/category-2.png"
import Category3 from "../../assets/img/category-3.png"
import Product1 from "../../assets/img/product1.png"
import Product2 from "../../assets/img/product2.png"
import Product3 from "../../assets/img/product3.png"
import Product4 from "../../assets/img/product4.png"
import Product5 from "../../assets/img/product5.png"
import Product6 from "../../assets/img/product6.png"
import Product7 from "../../assets/img/product7.png"
import Product8 from "../../assets/img/product8.png"
import ShareIcon from "../../assets/icon/share-icon.svg"
import CompareIcon from "../../assets/icon/compare-icon.svg"
import LikeIcon from "../../assets/icon/like-icon.svg"
import ShareYourSetup from "../../assets/img/share-your-setup.png"

const Index = () => {
    return (
        <>
            <header>
                <PageHeader/>
            </header>
            <main>
                <section className="section-fluid-wrapper">
                    <div className="section-content">
                        <PageHeroImage/>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="section-title">
                        <h1 className="text title">Browse The Range</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="section-content">
                        <div className="category-wrapper">
                            <div className="category-item">
                                <img src={Category1} alt="Category 1"/>
                                <div className="content">
                                    <h3 className="text product-title">Dining</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                            <div className="category-item">
                                <img src={Category2} alt="Category 2"/>
                                <div className="content">
                                    <h3 className="text product-title">Living</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                            <div className="category-item">
                                <img src={Category3} alt="Category 3"/>
                                <div className="content">
                                    <h3 className="text product-title">Bedroom</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="section-title">
                        <h1 className="text title">Our Product</h1>
                    </div>
                    <div className="section-content">
                        <div className="product-wrapper">

                            <div className="product-card">
                                <img src={Product1} alt=""/>
                                <div className="product-label disc">
                                    -40%
                                </div>
                                <div className="product-description">
                                    <h5 className="text product-title">Syltherine</h5>
                                    <p className="text product-subtitle">Stylish cafe chair</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 2.500.000</p>
                                        <p className="text product-price-subtitle">Rp. 3.500.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product2} alt=""/>
                                <div className="product-description">
                                    <h5 className="text product-title">Leviosa</h5>
                                    <p className="text product-subtitle">Stylish cafe chair</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 2.500.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product3} alt=""/>
                                <div className="product-label disc">
                                    -50%
                                </div>
                                <div className="product-description">
                                    <h5 className="text product-title">lolito</h5>
                                    <p className="text product-subtitle">Luxury big sofa</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 7.000.000</p>
                                        <p className="text product-price-subtitle">Rp. 14.000.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product4} alt=""/>
                                <div className="product-label new">
                                    New
                                </div>
                                <div className="product-description">
                                    <h5 className="text product-title">Respira</h5>
                                    <p className="text product-subtitle">Outdoor bar table and stool</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 500.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product5} alt=""/>
                                <div className="product-description">
                                    <h5 className="text product-title">Grifo</h5>
                                    <p className="text product-subtitle">Night lamp</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 1.500.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product6} alt=""/>
                                <div className="product-label new">
                                    New
                                </div>
                                <div className="product-description">
                                    <h5 className="text product-title">Muggo</h5>
                                    <p className="text product-subtitle">Small mug</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 150.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product7} alt=""/>
                                <div className="product-label disc">
                                    -50%
                                </div>
                                <div className="product-description">
                                    <h5 className="text product-title">Pinky</h5>
                                    <p className="text product-subtitle">Cute bed set</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 7.000.000</p>
                                        <p className="text product-price-subtitle">Rp. 14.000.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src={Product8} alt=""/>
                                <div className="product-label new">
                                    New
                                </div>
                                <div className="product-description">
                                    <h5 className="text product-title">Potty</h5>
                                    <p className="text product-subtitle">Minimalist flower pot</p>
                                    <div className="product-price">
                                        <p className="text product-price-title">Rp. 500.000</p>
                                    </div>
                                </div>
                                <div className="product-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                    <div className="btn-group">
                                        <button className="btn default">
                                            <img src={ShareIcon} alt="share icon"/>Share
                                        </button>
                                        <button className="btn default">
                                            <img src={CompareIcon} alt="compare icon"/>Compare
                                        </button>
                                        <button className="btn default">
                                            <img src={LikeIcon} alt="hearth icon"/>Like
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="btn-group">
                            <button className="btn primary-outline">Read More</button>
                        </div>
                    </div>
                </section>

                <section className="section-fluid-wrapper">
                    <div className="section-content">
                        <div className="inspiration-wrapper">
                            <div className="description">
                                <h1 className="text product-title">
                                    50+ Beautiful rooms inspiration
                                </h1>
                                <p className="text product-subtitle" style={{ marginBottom: '30px' }}>
                                    Our designer already made a lot of beautiful prototipe of rooms that inspire you
                                </p>
                                <button className="btn primary">Explore More</button>
                            </div>
                            <div className="content">

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-fluid-wrapper">
                    <div className="section-title">
                        <p className="text subtitle">Share your setup with</p>
                        <h1 className="text title">#FurniroFurniture</h1>
                    </div>
                    <div className="section-content">
                        <div className="share-setup-wrapper">
                            <img src={ShareYourSetup} alt="share your setup"/>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <PageFooter/>
            </footer>
        </>
    );
};

export default Index;