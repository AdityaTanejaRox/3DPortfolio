import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const AudioEngine = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-20 mt-12">
        <TitleHeader title="Real-Time Audio Engine" sub="Project" />

        <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
          <div className="md:w-1/2">
            <img
              src="/images/project8.png"
              alt="Audio Engine"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-white-80 text-lg leading-relaxed">
            <p className="mb-6">
              The Real-Time Audio Engine is a high-performance multithreaded
              audio system built in C++. Designed for gaming and simulation
              environments, it enables precise, low-latency playback and
              manipulation of audio assets.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Built using XAudio2 with custom audio buffers, filters, and
                effect chains.
              </li>
              <li>
                Capable of streaming, queuing, pausing, resuming, and looping
                sound effects in real time.
              </li>
              <li>
                Leveraged multithreading for asynchronous audio file loading and
                decoding.
              </li>
              <li>
                Integrated visual debugging tools and runtime controls for
                dynamic mixing and prioritization.
              </li>
            </ul>

            <p className="mt-6">
              This engine was tested with various WAV files, 3D positional
              effects, and real-time audio mixing. It serves as a foundation for
              immersive soundscapes in interactive systems.
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

export default AudioEngine;
