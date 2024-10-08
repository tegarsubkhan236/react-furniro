import Hero from "../../assets/img/banner.png"

const Index = () => {
    return (
        <div className="hero-wrapper">
            <img src={Hero} alt="banner"/>
            <div className="content">
                <p className="text subheading">New Arrival</p>
                <h2 className="text heading">Discover Our New Collection</h2>
                <p className="text" style={{ marginBottom: '30px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis.
                </p>
                <button className="btn primary">Buy Now</button>
            </div>
        </div>
    );
};

export default Index;