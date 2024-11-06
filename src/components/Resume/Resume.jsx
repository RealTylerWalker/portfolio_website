import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import './Resume.css';
import resume1 from '../../assets/resume_2.0_tyler_walker_2024-1.png'
import resume2 from '../../assets/resume_2.0_tyler_walker_2024-2.png'
import arrow_icon from '../../assets/arrow_icon.svg'
// import './Navbar.css'
// import './Footer.css'

const Resume = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to="/" className="back-button">
                    <div className="back-button-container">
                        <p>Back</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </Link>

            </nav>
            <img src={resume1} alt="My Resume" style={{ width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block' }} />
            <img src={resume2} alt="My Resume Page 2" style={{ width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block' }} />
            <Footer />
        </div>
    )
}
export default Resume;