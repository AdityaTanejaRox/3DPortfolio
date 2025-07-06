import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const ZeroLatency = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Zero-Latency Orderbook Matching Engine"
          sub="Real-Time Financial Systems"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project4.png"
            alt="Zero Latency Orderbook"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            A blazing-fast, real-time orderbook matching engine built from scratch in modern C++ — because Wall Street doesn’t wait for your for-loop. Designed to match and execute trades in microseconds using low-level systems programming, and absolutely no sleep().
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Design an ultra-low-latency trading core capable of deterministic performance.</li>
              <li>Eliminate all unnecessary allocations and blocking I/O.</li>
              <li>Handle massive throughput without breaking a sweat — or a thread.</li>
              <li>Simulate institutional-grade matching logic with real-world trade constraints.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Written entirely in C++ with custom memory allocators and preallocated buffers.</li>
              <li>Matching engine powered by optimized skip lists for O(log n) lookup + insert.</li>
              <li>Event-driven architecture running on a single-threaded event loop — no locks, no delays.</li>
              <li>Timestamped trades with nanosecond precision, ready for high-frequency simulations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique</h2>
            <p className="text-white/80">
              This wasn’t a textbook trading system — this was an actual simulation of HFT internals.
              Skip lists instead of binary trees. Preallocated memory pools instead of new/delete.
              No garbage collection, no latency spikes. It was about knowing how markets tick — and how
              to tick faster.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">⚔️ The Hard Stuff</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Ensuring sub-millisecond latency while handling 1M+ orders per second.</li>
              <li>Debugging race conditions in edge-triggered order match logic.</li>
              <li>Controlling every byte and branch to avoid cache misses and pipeline stalls.</li>
              <li>Writing a test framework to simulate burst trading with realistic latency profiles.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Processed over 1.2 million orders/sec in synthetic benchmarks with no slowdown.</li>
              <li>Zero dynamic memory allocations during critical match phase.</li>
              <li>Achieved average execution latency of ~230ns per order on release builds.</li>
              <li>Verified functional parity with exchange-level behavior using mock trade logs.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              This is what happens when you hand a systems programmer a copy of “Flash Boys” and
              a caffeine drip. The Zero-Latency Orderbook is a lesson in control — of time,
              memory, and every single instruction. It’s not a school project. It’s a war on latency.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Milliseconds Catch Up
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ZeroLatency;
