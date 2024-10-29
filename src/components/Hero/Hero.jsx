import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Ty Walker,</span> FSJS developer & digital solutions Jedi</h1>
            <p>I am located in Silicon Slopes, Utah, with over 10 years of experience in all things Digital Media, and over 1 year of experience in web dev. </p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero