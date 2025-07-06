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
          title="Custom Heap Memory Visualizer"
          sub="Real-Time C++ Debug Tools"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project5.png"
            alt="Heap Visualizer"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            This project turns memory internals into a living, breathing animation. It visualizes how your custom C++ allocator behaves—block allocations, frees, coalescing, fragmentation—all rendered live in a Python GUI. 
            It's like a stethoscope for your heap.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Build a visual debugger to track dynamic memory in real-time.</li>
              <li>Help students and devs see what malloc/free never shows.</li>
              <li>Show animations for coalescing, splitting, and fragmentation.</li>
              <li>Export JSON logs from the C++ side and replay it frame-by-frame in Python.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>C++ custom allocator logs heap operations as JSON snapshots.</li>
              <li>Python visualizer uses <code>matplotlib.animation</code> to animate blocks over time.</li>
              <li>Supports highlighting pNext/pPrev pointers, metadata tooltips, and allocation reasons.</li>
              <li>Includes a terminal ASCII view for CLI-only systems (WIP).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique</h2>
            <p className="text-white/80">
              Most memory debuggers are cryptic logs or static tools. This one breathes life into the heap. You don’t just see a leak—you see how it grew, fragmented, and got cleaned. It’s built for educational firepower and real-world debugging.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">⚔️ The Hard Stuff</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Synchronizing log snapshot timestamps to generate accurate animation frames.</li>
              <li>Coloring coalescing transitions with real-time frame interpolation.</li>
              <li>Creating tooltip overlays and keeping them aligned with animated heap blocks.</li>
              <li>Preserving consistent pointer arrows (pNext/pPrev) during dynamic memory shifts.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Used in C++ class to explain fragmentation, alignment, and coalescing live.</li>
              <li>Animated over 150 heap transitions with metadata and arrows rendered correctly.</li>
              <li>Added pause/play support and JSON diffing for side-by-side comparisons.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧪 Sample Snippet</h2>
            <pre className="bg-gray-900 p-4 rounded-xl overflow-x-auto text-green-400 text-sm">
{`{
  "timestamp": 102,
  "blocks": [
    { "start": 0, "size": 64, "used": true, "pNext": 64 },
    { "start": 64, "size": 128, "used": false, "pNext": 192 },
    ...
  ]
}`}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              This project gave me hands-on experience debugging real-world memory behavior and rendering it as a visual story. 
              It combines C++ low-level systems, Python graphics, and human intuition. When you're debugging malloc in real-time with frame-by-frame replay... you're not just allocating, you're orchestrating.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before You Fragment
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HeapVisualizer;
