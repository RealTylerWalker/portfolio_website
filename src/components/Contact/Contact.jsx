import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm available for new projects—feel free to reach out so we can discuss your digital goals.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>RealTylerWalker@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>(801) 560-4391</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Salt Lake City, Utah</p>
                        </div>
                    </div>
                </div>
                <form action="" className="contact-right">
                    <label htmlFor="">Tyler Walker</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className="contact-submit">Submit Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact