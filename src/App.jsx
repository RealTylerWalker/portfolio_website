import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import MyWork from './components/MyWork/MyWork.jsx'
import Contact from './components/Contact/Contact.jsx'

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
        </div>
    )
}

export default App