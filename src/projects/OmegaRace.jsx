import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const OmegaRace = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-20 mt-12">
        <TitleHeader title="Omega Race (Networked)" sub="Project" />

        <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
          <div className="md:w-1/2">
            <img
              src="/images/project11.png"
              alt="Omega Race Networked"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-white-80 text-lg leading-relaxed">
            <p className="mb-6">
              A modern reimplementation of the classic arcade title <strong>Omega Race</strong>,
              upgraded from a console-based game to a fully <strong>networked multiplayer experience</strong>.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Implemented reliable <strong>TCP/UDP socket communication</strong> to support multiplayer combat.
              </li>
              <li>
                Built a custom <strong>client-server architecture</strong> handling real-time state synchronization, collision detection, and latency compensation.
              </li>
              <li>
                Designed and tested <strong>multithreaded input and event handling</strong> to ensure smooth gameplay across machines.
              </li>
              <li>
                Upgraded visuals with a retro-futuristic theme and added audio effects for mines, ships, and explosions.
              </li>
            </ul>

            <p className="mt-6">
              This project emphasized <strong>real-time networking, concurrency control, and game loop stability</strong>,
              bridging low-level systems with multiplayer gameplay mechanics.
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

export default OmegaRace;
