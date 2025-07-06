import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const GraphicsEngine = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
                  title="Real-Time Graphics Engine"
                  sub="Low-Level System Programming"
                />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project7.png"
            alt="Graphics Engine"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            A real-time 3D graphics engine written in C++, optimized from the ground up to manage scenes,
            render assets, and handle game loops like a pro. It’s not just a pretty renderer — it’s a tight,
            architectural exercise in how real-time systems breathe under pressure.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Build a custom 3D graphics engine with real-time rendering capabilities.</li>
              <li>Implement a clean, scalable scene graph architecture with update & render trees.</li>
              <li>Use modern design patterns to improve maintainability and performance.</li>
              <li>Ensure every update-render cycle runs smoothly under tight timing constraints.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Written entirely in C++ with custom memory management and debug tools.</li>
              <li>Used a tree-based scene system with separate traversal passes for rendering and updates.</li>
              <li>Optimized rendering pipeline for batching sprites and reducing GPU overhead.</li>
              <li>Implemented a custom camera system, transform hierarchy, and layered z-ordering.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique</h2>
            <p className="text-white/80">
              This wasn’t about slapping sprites on screen. It was about systems thinking — how do you build
              something where every entity updates cleanly, renders in order, and works harmoniously in real time?
              From the custom transform nodes to the layer-based render passes, this engine was an exercise in
              low-level control with architectural discipline.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">⚔️ The Hard Stuff</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Debugging traversal logic in a dynamic tree scene system.</li>
              <li>Profiling CPU usage across update/render stages.</li>
              <li>Controlling memory layout and fragmentation with tons of dynamic objects.</li>
              <li>Thread-safe update/render sync with zero frame drops.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>60 FPS sustained with over 200 active entities and multi-layer rendering.</li>
              <li>47% reduction in draw calls through batching and scene flattening.</li>
              <li>Demoed with a side-scroller game and real-time entity spawning.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🔍 Sample Usage</h2>
            <pre className="bg-gray-900 p-4 rounded-xl overflow-x-auto text-green-400 text-sm">
{`SceneManager.SetActive("MainMenu");
Camera.SetZoom(1.5f);
GameObject* enemy = new Enemy();
enemy->SetPosition(150, 40);
RenderLayer.Add(enemy);`}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              The Graphics Engine project taught me how real-time systems are built from scratch — not with an
              engine, but as the engine. It gave me fluency in real-time design patterns, memory flow, and
              architectural rigor. The kind of fluency that turns ideas into engines.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Meshes Get You
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GraphicsEngine;
