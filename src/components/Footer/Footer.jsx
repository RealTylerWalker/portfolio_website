import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a full stack developer with over 10 years of experience within the digital media industry</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <span>© 2024 Tyler Walker. All rights reserved.</span>
                </div>
                <div className="footer-bottom-right">
                    <span>Term of Services</span>
                    <span>Privacy Policy</span>
                    <span>Connect with me</span>
                </div>
            </div>
        </div>
    )
}

export default Footer