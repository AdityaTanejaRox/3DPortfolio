import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sections
import Hero from "./componenets/sections/Hero";
import ShowcaseSection from "./componenets/sections/ShowcaseSection";
import LogoSection from "./componenets/sections/LogoSection";
import FeatureCards from "./componenets/sections/FeatureCards";
import ExperienceSection from "./componenets/sections/ExperienceSection";
import TechStack from "./componenets/sections/TechStack";
import Testimonials from "./componenets/sections/Testimonials";
import Contact from "./componenets/sections/Contact";
import Footer from "./componenets/sections/Footer";
import NavBar from "./componenets/NavBar";

// Pages
import ProjectsPage from "./projects/ProjectsPage"; // you’ll create this later

const HomePage = () => (
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
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
