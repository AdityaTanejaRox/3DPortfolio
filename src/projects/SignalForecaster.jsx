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
          sub="C++ Networking x Python Forecasting"
        />

        <div className="mt-10 mb-20">
          <img
            src="/images/project6.png"
            alt="Market Signal Forecaster"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-lg space-y-6 mb-20">
          <p>
            This project bridges high-performance C++ networking with Python's
            statistical forecasting power. I built a custom TCP server in C++
            that streams mock market data to a Python client in real time.
          </p>

          <p>
            The client applies <code>ARIMA</code> and <code>GARCH</code>
            models to forecast market signals, visualize volatility, and evaluate
            prediction accuracy — all live.
          </p>

          <p>
            Multiple instruments can be tracked simultaneously, and the
            system supports exportable logs for backtesting and post-trade
            analysis. It's a playground for building intuition around market
            behavior and signal noise.
          </p>

          <p>
            <strong>Tech Stack:</strong> C++ (socket programming), Python
            (statsmodels, matplotlib, pandas), Threaded streaming architecture.
          </p>

          <p className="italic text-white-50">
            Think Bloomberg Terminal meets ARIMA — but custom-coded.
          </p>

          <Link
            to="https://github.com/AdityaTanejaRox/SignalForecaster"
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

export default SignalForecaster;
