import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.png'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Technical Problem Solver | Passionate About Learning and Driving Client Success</p>
                        <p>I’m a recent graduate of VSchool’s Full Stack Development Program, currently seeking roles in technical support or programming.
                            My background spans from sales and customer support to web development, with strong analytical and technical skills.</p>
                        <p>After a career shift post-COVID, I transitioned from sales to tech, driven by my passion for problem-solving and client-facing roles.
                            I’ve gained experience in troubleshooting, process improvement, and managing digital projects, along with hands-on technical expertise in JavaScript and React.</p>
                        <p>I’m looking for opportunities where I can leverage my skills to provide technical solutions and ensure customer success in a collaborative, growth-oriented environment.</p>
                    </div>

                </div>

            </div>

            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "65%" }} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                <div className="about-skill"><p>Git</p><hr style={{ width: "75%" }} /></div>
                <div className="about-skill"><p>Mongoose</p><hr style={{ width: "63%" }} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{ width: "69%" }} /></div>
                <div className="about-skill"><p>Photoshop</p><hr style={{ width: "75%" }} /></div>
                <div className="about-skill"><p>Illustrator</p><hr style={{ width: "80%" }} /></div>
                <div className="about-skill"><p>Premiere Pro</p><hr style={{ width: "70%" }} /></div>
                <div className="about-skill"><p>After Effects</p><hr style={{ width: "60%" }} /></div>

            </div>

            <div className="about-achievments">
                <div className="about-achievment">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievment">
                    <h1>40+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievment">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>

        </div>
    )
}

export default About