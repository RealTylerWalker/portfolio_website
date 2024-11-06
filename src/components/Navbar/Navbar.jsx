import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='navbar'>
            <img src={logo} className="navbar-logo" alt="" />

            {isMobile && (
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <img src={menu_open} className="menu-open" alt="" />}
                </div>
            )}

            <ul className={`nav-menu ${isMobile ? (isOpen ? 'active' : '') : ''}`}>
                <li><AnchorLink
                    className='anchor-link' href='#home' onClick={toggleMenu}><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink
                    className='anchor-link' offset={50} href='#about' onClick={toggleMenu}><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink
                    className='anchor-link' offset={50} href='#work' onClick={toggleMenu}><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink
                    className='anchor-link' offset={50} href='#services' onClick={toggleMenu}><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink
                    className='anchor-link' offset={50} href='#contact' onClick={toggleMenu}><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            {!isMobile && (
                <div className="nav-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect With Me
                    </AnchorLink>
                </div>
            )}
        </div>
    )
}

export default Navbar