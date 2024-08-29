import Banner from "../../assets/img/banner.png"

const PageBanner = () => {
    return (
        <div className="banner-wrapper">
            <img src={Banner} className="banner-img" alt="banner"/>
            <div className="banner-card">
                <div className="banner-content">
                    <p className="subtitle">New Arrival</p>
                    <h2 className="title">Discover Our New Collection</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className="btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;