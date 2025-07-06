import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const HeapVisualizer = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Custom Memory Heap Allocator & Visual Debugger"
          sub="Low-Level Systems Programming"
        />

        <div className="mt-10 mb-20">
          <img
            src="/images/project5.png"
            alt="Heap Allocator and Visualizer"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-lg space-y-6 mb-20">
          <p>
            Ever wondered what lies beneath <code>malloc</code> and{" "}
            <code>free</code>? This project peels back the curtain with a
            handcrafted memory allocator in C++, tailored for low-latency
            systems and debugging education.
          </p>

          <p>
            The heap manager supports free list coalescing, block splitting,
            metadata tracking, and custom block headers. All allocation logic is
            visualized in real time using a Python-powered animation engine —
            watch fragmentation, reuse, and coalescing unfold with each call.
          </p>

          <p>
            <strong>Tech Stack:</strong> C (low-level heap logic), C++ (allocator
            interface), Python (matplotlib animation), Custom Trace System.
          </p>

          <p className="italic text-white-50">
            There’s beauty in managing your own heap — if you’re brave enough.
          </p>

          <Link
            to="https://github.com/AdityaTanejaRox/CustomHeapVisualizer"
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

export default HeapVisualizer;
