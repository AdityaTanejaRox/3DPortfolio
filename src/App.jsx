import React from 'react'
import Hero from './componenets/sections/Hero'
import ShowcaseSection from './componenets/sections/ShowcaseSection'
import LogoSection from './componenets/sections/LogoSection'
import FeatureCards from './componenets/sections/FeatureCards'
import ExperienceSection from './componenets/sections/ExperienceSection'
import TechStack from './componenets/sections/TechStack'
import Testimonials from './componenets/sections/Testimonials'
import Contact from './componenets/sections/Contact'
import Footer from './componenets/sections/Footer'
import NavBar from './componenets/NavBar'
const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App