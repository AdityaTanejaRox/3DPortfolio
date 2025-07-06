import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const TradingBot = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-20 mt-12">
        <TitleHeader title="Live 24/7 Algorithmic Trading Bot" sub="Project" />

        <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
          <div className="md:w-1/2">
            <img
              src="/images/project9.png"
              alt="Algorithmic Trading Bot"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-white-80 text-lg leading-relaxed">
            <p className="mb-6">
              The Live 24/7 Algorithmic Trading Bot is a fully autonomous system
              designed to analyze markets, generate signals, and execute trades
              continuously across multiple exchanges and asset classes.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Built using Python with broker APIs (e.g., Alpaca, Binance) for
                real-time execution.
              </li>
              <li>
                Implements momentum and mean-reversion strategies based on
                technical indicators and statistical signals.
              </li>
              <li>
                Includes risk management layers for stop-loss, take-profit, and
                max exposure thresholds.
              </li>
              <li>
                Runs on cloud infrastructure with persistent state and automatic
                recovery from crashes.
              </li>
            </ul>

            <p className="mt-6">
              The bot supports backtesting and paper/live trading modes. It was
              optimized to remain resilient across downtime, data spikes, and
              volatile conditions—making it ideal for long-term automated
              deployment.
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

export default TradingBot;
