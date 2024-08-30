import Logo from "../../assets/img/logo.png";
import AccountAlert from "../../assets/icon/account-alert-icon.svg";
import Search from "../../assets/icon/search-icon.svg";
import Heart from "../../assets/icon/heart-icon.svg";
import Cart from "../../assets/icon/cart-icon.svg";

const PageHeader = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <a href="#" className="logo">
                    <img src={Logo} alt="Furniro Logo"/>
                    <span>Furniro</span>
                </a>
                <ul className="center-menu">
                    <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Shop</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">About</a></li>
                    <li className="menu-item"><a href="#" className="menu-link">Contact</a></li>
                </ul>
                <ul className="right-menu">
                    <li className="menu-item">
                        <a href="#" className="menu-link" aria-label="Account">
                            <img src={AccountAlert} className="icon" alt="Account Alert Icon"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link" aria-label="Search">
                            <img src={Search} alt="Search Icon"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link" aria-label="Favorites">
                            <img src={Heart} alt="Favorites Icon"/>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link" aria-label="Cart">
                            <img src={Cart} alt="Cart Icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default PageHeader;