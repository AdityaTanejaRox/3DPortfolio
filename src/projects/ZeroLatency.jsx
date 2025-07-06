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

        <div className="mt-10 mb-20">
          <img
            src="/images/project4.png"
            alt="Zero Latency Orderbook"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-lg space-y-6 mb-20">
          <p>
            A blazing-fast real-time orderbook matching engine built in modern
            C++, architected for ultra-low latency trading systems. The engine
            executes incoming orders with sub-millisecond latency using
            optimized skip lists and preallocated memory pools.
          </p>

          <p>
            It’s designed to simulate institutional-grade throughput — tested to
            handle over <strong>1 million orders per second</strong> with
            deterministic performance, even under load. Core logic operates
            on a lock-free, single-threaded event loop, ensuring minimal
            contention and maximal determinism.
          </p>

          <p>
            <strong>Tech Stack:</strong> C++ (bare-metal), Skip List, Custom
            Memory Allocator, Heap Pools, Event-Driven Architecture.
          </p>

          <p className="italic text-white-50">
            Curious how I achieved lock-free, zero-alloc performance? Let's
            talk.
          </p>

          <Link
            to="https://github.com/AdityaTanejaRox/ZeroLatencyOrderbook"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-[#1E1E2F] hover:bg-[#2b2b3d] transition duration-300 border border-white text-white font-semibold"
          >
            View Source on GitHub →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ZeroLatency;
