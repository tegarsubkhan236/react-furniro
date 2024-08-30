import {PageHeader, PageHeroImage} from "../../components";
import Category1 from "../../assets/img/category-1.png"
import Category2 from "../../assets/img/category-2.png"
import Category3 from "../../assets/img/category-3.png"

const Index = () => {
    return (
        <>
            <header>
                <PageHeader/>
                <PageHeroImage/>
            </header>
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
                                    <h3 className="text title-product">Dining</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                            <div className="img-text-item">
                                <img src={Category2} alt="Category 2"/>
                                <div className="content">
                                    <h3 className="text title-product">Living</h3>
                                </div>
                                <div className="content-overlay">
                                    <button className="btn secondary">Buy Now</button>
                                </div>
                            </div>
                            <div className="img-text-item">
                                <img src={Category3} alt="Category 3"/>
                                <div className="content">
                                    <h3 className="text title-product">Bedroom</h3>
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
                </div>

                <div className="section-wrapper">
                    <div className="section-title">
                        <p className="text subtitle">Share your setup with</p>
                        <h1 className="text title">#FuniroFurniture</h1>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Index;