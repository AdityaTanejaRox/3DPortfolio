import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const SpaceInvaders = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Space Invaders Clone"
          sub="Design Pattern-Driven Game Architecture"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project10.png"
            alt="Space Invaders"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            A full C# recreation of the classic Space Invaders game, built using
            pure object-oriented principles and an arsenal of design patterns.
            This wasn't just a game project — it was an academic deep dive into
            architecture, extensibility, and performance in real-time systems.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Faithfully recreate the Space Invaders gameplay loop in C#.</li>
              <li>Demonstrate mastery over major design patterns used in real-time game systems.</li>
              <li>Build a robust collision system that uses decoupled event management.</li>
              <li>Ensure game performance and maintainability under complex object interactions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Built in C# with real-time game loop, sprite rendering, and update systems.</li>
              <li>Implemented over 15 design patterns: Observer, State, Visitor, Template, Adapter, Composite, Command, Object Pooling, Strategy, Singleton, and Factory.</li>
              <li>Collision detection handled using a flexible, extensible observer system.</li>
              <li>Object pooling system reused missiles, aliens, and explosion sprites for performance.</li>
              <li>State transitions handled via SceneStateManager and individual scene handlers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique</h2>
            <p className="text-white/80">
              This wasn’t about Unity or game engines — this was raw architecture. I built everything
              from scratch, from the object poolers to the scene managers. Each pattern was integrated
              deliberately, with clean separation of concerns. It’s like a playable textbook on software design.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">⚔️ The Hard Stuff</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Synchronizing missile-alien collision with event callbacks under high fire rate.</li>
              <li>Handling state transitions between SceneSelect → ScenePlay → SceneOver with zero leaks.</li>
              <li>Creating a Flyweight glyph rendering system for UI elements (score, credits, text).</li>
              <li>Ensuring decoupled logic across game subsystems while maintaining tight control.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Ran at locked 60 FPS even with 55 aliens, 3 shields, missiles, explosions, and player input.</li>
              <li>Zero memory leaks across scene transitions due to controlled object lifecycle.</li>
              <li>Codebase passed academic performance and architecture audits.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              Space Invaders was where I proved to myself that I could build a full real-time system with best-in-class
              software design. Every design pattern wasn’t just for show — it solved a real architectural or performance
              challenge. This was low-level C# architecture with real-time pressure. I’d do it again in a heartbeat.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Aliens Respawn
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SpaceInvaders;
