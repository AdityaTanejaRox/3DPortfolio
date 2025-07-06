import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const GraphicsEngine = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-20 mt-12">
        <TitleHeader title="Real-Time Graphics Engine" sub="Project" />

        <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
          <div className="md:w-1/2">
            <img
              src="/images/project7.png"
              alt="Graphics Engine"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-white-80 text-lg leading-relaxed">
            <p className="mb-6">
              The Real-Time Graphics Engine is a C++ project built from scratch
              to render and animate 2D and 3D objects using OpenGL. It forms the
              visual backbone for real-time simulations and interactive games,
              with a focus on performance and extensibility.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Features real-time rendering using modern OpenGL and GLSL
                shaders.
              </li>
              <li>
                Supports object transformation, camera controls, and basic
                lighting.
              </li>
              <li>
                Designed with a modular architecture to allow plug-and-play of
                components like texture loaders and mesh parsers.
              </li>
              <li>
                Optimized for minimal frame drops using multithreaded
                rendering-ready pipelines.
              </li>
            </ul>

            <p className="mt-6">
              This engine provided the foundation for building interactive
              games and simulations, and demonstrates expertise in low-level
              graphics programming.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/projects" className="text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GraphicsEngine