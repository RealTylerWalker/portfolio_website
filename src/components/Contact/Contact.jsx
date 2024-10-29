import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'

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
                </div>
            </div>
        </div>
    )
}

export default Contact