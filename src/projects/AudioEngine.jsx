import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const AudioEngine = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Real-Time Audio Engine"
          sub="Multithreaded Sound System"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project8.png"
            alt="Audio Engine"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            I built a real-time multithreaded audio engine from scratch in C++. It plays audio, mixes sounds, handles buffers across threads, and makes your game sound like it belongs in a AAA title—even if it’s made by one guy with too much coffee and not enough time.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Design a fully multithreaded audio engine.</li>
              <li>Ensure real-time playback with zero stutter.</li>
              <li>Create a system that handles buffer queuing, audio formats, and simultaneous sounds efficiently.</li>
              <li>Learn how XAudio2 works and break it down like a mad scientist disassembling a robot.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Built using C++ with XAudio2 as the core API.</li>
              <li>Utilized producer-consumer design to stream sound data across worker threads.</li>
              <li>Integrated WAV file parsing, playback priority management, and adjustable volume/pan.</li>
              <li>Engine supported dynamic mixing of multiple sound sources without dropping a single frame.</li>
              <li>Leveraged a ring buffer to keep audio smooth even under load.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique or Difficult</h2>
            <p className="text-white/80">
              Getting multithreaded audio to not sound like a blender fighting a microwave was... hard. Synchronization between streaming and playback threads had to be precise to the microsecond—no blocking allowed. Implemented real-time editing support using Audacity for sound assets, requiring hot-reloading compatibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧠 Why It Matters</h2>
            <p className="text-white/80">
              Audio is the unsung hero of immersive software. This engine gave me deep experience in concurrent architecture, low-level audio processing, and debugging real-time systems—a trifecta you have to master if you're aiming at HFT systems, gaming engines, or real-time multimedia apps.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Played and mixed over 32 audio clips simultaneously without a hiccup.</li>
              <li>Sub-10ms latency from trigger to playback.</li>
              <li>Showcased in a live YouTube demo as part of a university-level Real-Time Multithreaded Architecture sprint.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎮 Demo Snapshot</h2>
            <pre className="bg-gray-900 p-4 rounded-xl overflow-x-auto text-green-400 text-sm">
{`AudioEngine.Play("explosion.wav", loop=false);
AudioEngine.Play("background.wav", loop=true);
AudioEngine.Stop("background.wav");`}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              If code could sing, this would be opera. The Audio Engine project is where I learned to push C++ real-time systems under pressure—thread coordination, buffer management, asset conditioning—it all had to work now, not "eventually." That’s the essence of high-performance real-time engineering.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Audio Glitches Get You
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AudioEngine;
