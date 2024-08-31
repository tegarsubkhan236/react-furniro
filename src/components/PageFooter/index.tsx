const PageFooter = () => {
    return (
        <>
            <hr/>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-left-content">
                        <div className="footer-logo">
                            Funiro.
                        </div>
                        <div className="footer-description">
                            400 University Drive Suite 200 Coral Gables, <br/>FL 33134 USA
                        </div>
                    </div>
                    <div className="footer-right-content">
                        <div className="footer-menu">
                            <div className="footer-menu-title">
                                Links
                            </div>
                            <div className="footer-menu-content">
                                <ul>
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-menu">
                            <div className="footer-menu-title">
                                Help
                            </div>
                            <div className="footer-menu-content">
                                <ul>
                                    <li>Payment Options</li>
                                    <li>Returns</li>
                                    <li>Privacy Policies</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-menu">
                            <div className="footer-menu-title">
                                Newsletter
                            </div>
                            <div className="footer-menu-content">
                                <form action="#">
                                    <input type="email" placeholder="Enter Your Email Address" required/>
                                    <button>SUBSCRIBE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr/>
                    <p>2023 funiro. All rights reverved</p>
                </div>
            </div>
        </>
    );
};

export default PageFooter;