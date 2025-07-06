import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const SignalForecaster = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Real-Time Market Signal Forecaster"
          sub="Networked Time Series Forecasting"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project6.png"
            alt="Signal Forecaster"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            A hybrid C++ and Python system that streams mock market data over a TCP socket and applies real-time
            ARIMA and GARCH models to forecast future price movements. Think: Bloomberg terminal meets MIT problem set.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Stream live time-series data from a C++ TCP server to a Python analytics engine.</li>
              <li>Apply ARIMA and GARCH models for real-time market signal forecasting.</li>
              <li>Visualize predictions, confidence intervals, and rolling error metrics live.</li>
              <li>Ensure low-latency communication between systems for seamless integration.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧩 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Built the socket server in C++ using TCP with JSON-formatted message passing.</li>
              <li>Python client used `statsmodels` for ARIMA, and `arch` package for GARCH.</li>
              <li>Real-time matplotlib dashboard visualized incoming data and forecast curves.</li>
              <li>Implemented rolling forecast error tracking (MAE, RMSE) in real-time.</li>
              <li>Bi-directional flow allowed triggering resync or re-modeling on demand.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 What Made It Unique</h2>
            <p className="text-white/80">
              Most people choose one language. I chose both — because C++ gives you speed and Python gives you
              brains. Building a socket bridge between them and watching predictions fly in real-time was... addictive.
              Add some charts, and it becomes downright beautiful.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">⚔️ The Hard Stuff</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Ensuring socket reads in Python didn’t stall when buffer timing changed mid-stream.</li>
              <li>Aligning data for ARIMA/GARCH which are sensitive to missing values or misordered timestamps.</li>
              <li>Handling TCP packet fragmentation between C++ send and Python receive buffers.</li>
              <li>Tuning models in-flight without introducing lag or breaking the forecast loop.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Live forecast latency stayed under 40ms per cycle end-to-end.</li>
              <li>Maintained <strong>90%+ directional accuracy</strong> over synthetic datasets.</li>
              <li>Generated over 5k forecasts in a continuous loop with no memory or socket leaks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              The Signal Forecaster taught me how to wire raw sockets to live analytics. This wasn’t just a
              data science project — it was about engineering for reliability, latency, and flexibility. If you
              want to forecast the future, first you have to build a pipeline that survives the present.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Forecast Collapses
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SignalForecaster;
