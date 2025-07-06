import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const SpaceInvaders = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-20 mt-12">
        <TitleHeader title="Space Invaders Clone" sub="Project" />

        <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
          <div className="md:w-1/2">
            <img
              src="/images/project10.png"
              alt="Space Invaders Clone"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-white-80 text-lg leading-relaxed">
            <p className="mb-6">
              A from-scratch clone of the classic arcade game <strong>Space Invaders</strong>,
              implemented in C++ with an emphasis on performance, architecture,
              and object-oriented design.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Built a real-time entity component system for player, enemies,
                and projectiles.
              </li>
              <li>
                Used design patterns like <strong>State</strong>, <strong>Observer</strong>, and <strong>Factory</strong>
                for clean modularity and maintainability.
              </li>
              <li>
                Optimized rendering using sprite batching and a custom game loop
                for consistent frame pacing.
              </li>
              <li>
                Added collision detection, sound effects, and score tracking to
                replicate arcade gameplay.
              </li>
            </ul>

            <p className="mt-6">
              The project demonstrates a strong understanding of software
              architecture in game development and was built without using game
              engines to deepen low-level understanding.
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

export default SpaceInvaders;
