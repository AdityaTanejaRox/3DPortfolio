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
import ProjectsPage from "./projects/ProjectsPage"; 
import ZeroLatency from "./projects/ZeroLatency";
import HeapVisualizer from "./projects/HeapVisualizer";
import SignalForecaster from "./projects/SignalForecaster";
import GraphicsEngine from "./projects/GraphicsEngine";
import AudioEngine from "./projects/AudioEngine";
import TradingBot from "./projects/TradingBot";
import SpaceInvaders from "./projects/SpaceInvaders";
import OmegaRace from "./projects/OmegaRace";

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
        <Route path="/projects/order" element={<ZeroLatency />} />
        <Route path="/projects/heap" element={<HeapVisualizer />} />
        <Route path="/projects/signal" element={<SignalForecaster />} />
        <Route path="/projects/graphics" element={<GraphicsEngine />} />
        <Route path="/projects/audio" element={<AudioEngine />} />
        <Route path="/projects/trading" element={<TradingBot />} />
        <Route path="/projects/spaceinvaders" element={<SpaceInvaders />} />
        <Route path="/projects/omegarace" element={<OmegaRace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
