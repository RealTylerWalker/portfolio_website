import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Ty Walker,</span> FSJS developer & digital solutions Jedi</h1>
            <p>I am located in Silicon Slopes, Utah, with over 10 years of experience in all things Digital Media, and over 1 year of experience in web dev. </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink
                    className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero