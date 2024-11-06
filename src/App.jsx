import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import MyWork from './components/MyWork/MyWork.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Resume from './components/Resume/Resume.jsx'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Navbar />
                        <Hero />
                        <About />
                        <MyWork />
                        <Services />
                        <Contact />
                        <Footer />
                    </div>
                } />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App