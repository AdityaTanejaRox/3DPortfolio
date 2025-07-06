import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const OmegaRace = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Omega Race Multiplayer Clone"
          sub="Real-Time Networking & Game Simulation"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project11.png"
            alt="Omega Race"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            A multiplayer clone of the 1980s arcade classic <strong>Omega Race</strong>, rebuilt with modern C++ and UDP networking. Supports record/playback, predictive client logic, and real-time physics that don’t explode under packet loss.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Implement a fast-paced multiplayer game over UDP with packet loss tolerance.</li>
              <li>Create a record/playback tool to debug movement and collisions frame-by-frame.</li>
              <li>Integrate Dead-reckoning and Client-Side prediction for smooth gameplay.</li>
              <li>Develop full client-server architecture with minimal input delay.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Written in C++ using custom UDP sockets with acknowledgment and sequence handling.</li>
              <li>Used a time-stamped log buffer for input prediction and history replay.</li>
              <li>Implemented dead-reckoning algorithms for ghost simulation in case of dropped packets.</li>
              <li>Client-side interpolation buffers handle render delay vs. simulation time sync.</li>
              <li>Built debugging tool to record and play back entire matches deterministically.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique</h2>
            <p className="text-white/80">
              Instead of just using prediction, I made it visual. The record/playback tool shows exactly where your prediction failed. The game doesn’t just compensate for lag — it makes it visible, understandable, and correctable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">⚔️ The Hard Stuff</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Syncing simulation ticks across machines with different frame rates.</li>
              <li>Handling mid-game packet loss without rubber-banding or full desync.</li>
              <li>Implementing input history rewind with re-simulation for full correction.</li>
              <li>Combining client-side prediction with server authority for fair reconciliation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Maintained 60Hz sync between clients with only 1–2 frame average prediction error.</li>
              <li>Simulated 300+ input events/sec without input drop or stutter.</li>
              <li>Fully recoverable gameplay via playback logs — even from client disconnects.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              Omega Race wasn’t just a retro clone — it was a systems-level networking challenge. This project taught me how to build lag-tolerant systems, design deterministic simulation loops, and debug real-time game sync without rage-quitting. It’s multiplayer engineering with attitude.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Packets Drop
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OmegaRace;
