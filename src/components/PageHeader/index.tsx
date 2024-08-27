import {useState} from "react";

const PageHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <div className="logo">MySite</div>
            <div className={`nav ${isNavOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="menu-toggle" onClick={toggleNav}>
                ☰
            </div>
        </header>
    );
};

export default PageHeader;