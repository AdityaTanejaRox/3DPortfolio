import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import TitleHeader from "../componenets/TitleHeader";
import { Link } from "react-router-dom";

const TradingBot = () => {
  return (
    <>
      <NavBar />

      <main className="max-w-5xl px-6 py-20 mx-auto mt-12">
        <TitleHeader
          title="Deep Reinforcement Learning Trading Bot"
          sub="AI-Powered Strategy Simulation"
        />

        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl mt-12">
          <img
            src="/images/project9.png"
            alt="Trading Bot"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>

        <div className="text-white text-base sm:text-lg space-y-6 mb-20">
          <p className="italic text-white/80">
            A fully autonomous trading agent that uses Deep Q-Networks (DQN) to learn how to trade profitably in a simulated stock market environment. It reacts to changing market conditions, optimizes its risk/reward decisions, and trains on thousands of episodes of market interaction.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎯 Project Goals</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Build a trading bot that learns from experience instead of predefined rules.</li>
              <li>Simulate realistic stock market environments with volatility and slippage.</li>
              <li>Design a reward function balancing profitability and risk exposure.</li>
              <li>Train and evaluate the bot using real historical data.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧠 Technical Highlights</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Used TensorFlow to implement DQN architecture with experience replay.</li>
              <li>State space encoded with price, volume, moving averages, and volatility.</li>
              <li>Actions included Buy, Sell, Hold with cost-based execution.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🚧 Challenges Faced</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Training stability—balancing exploration and exploitation effectively.</li>
              <li>Preventing overfitting to specific market conditions.</li>
              <li>Designing a reward function that incentivizes long-term profit.</li>
              <li>Debugging reward shaping and stale learning behavior.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📊 Measurable Wins</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Achieved a Sharpe ratio of 2.3 on test data after 30k training episodes.</li>
              <li>Outperformed buy-and-hold baseline by 42% on volatile assets.</li>
              <li>Reduced drawdown by over 30% using adaptive position sizing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🧪 Sample Reward Function</h2>
            <pre className="bg-gray-900 p-4 rounded-xl overflow-x-auto text-green-400 text-sm">
{`reward = (portfolio_value - prev_value) / prev_value
penalty = max_drawdown * 0.1
final_reward = reward - penalty`}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📎 Summary</h2>
            <p className="text-white/80">
              The DRL Trading Bot gave me deep exposure to reinforcement learning, reward modeling, and time-series environments. It’s a taste of what happens when machine learning meets real-world market complexity—and thrives in it.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/projects" className="text-blue-400 hover:underline">
              ← Return to Projects Before the Markets Close
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TradingBot;
