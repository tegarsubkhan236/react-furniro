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

const Index = () => {
    return (
        <>
            <header>
                <PageHeader/>
            </header>
            <PageHeroImage/>
            <main className="container">
                <div className="section-wrapper">
                    <div className="section-title">
                        <h1 className="text title">Browse The Range</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="section-content">
                        <div className="img-text-wrapper">
                            <div className="img-text-item">
                                <img src={Category1} alt="Category 1"/>
                                <div className="content">
                                    <h3 className="text product-title">Dining</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                            <div className="img-text-item">
                                <img src={Category2} alt="Category 2"/>
                                <div className="content">
                                    <h3 className="text product-title">Living</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                            <div className="img-text-item">
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
                </div>

                <div className="section-wrapper">
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
                                    <p className="text subtitle">Stylish cafe chair</p>
                                    <div className="product-price">
                                        <p className="product-disc-price">Rp. 2.500.000</p>
                                        <p className="product-real-price">Rp. 3.500.000</p>
                                        <p className="product-real-price">Rp. 3.500.000</p>
                                        <p className="product-real-price">Rp. 3.500.000</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="section-title">
                        <p className="text subtitle">Share your setup with</p>
                        <h1 className="text title">#FuniroFurniture</h1>
                    </div>
                </div>
            </main>
            <footer>
                <PageFooter/>
            </footer>
        </>
    );
};

export default Index;