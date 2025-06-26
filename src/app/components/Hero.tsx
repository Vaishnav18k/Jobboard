import React from "react";
import { StatBriefcase, StatArrowUp, StatLocation } from "./StatIcon";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center min-h-[520px]">
      <h1 className="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Find Your Dream Job Today</h1>
      <p className="text-2xl font-medium mb-12 max-w-3xl mx-auto opacity-90">
        Discover thousands of job opportunities from top companies. Your perfect career awaits.
      </p>
      <div className="flex flex-row gap-16 justify-center mb-4">
        <div className="flex flex-col items-center">
          <StatBriefcase size={48} className="mb-2" />
          <span className="text-4xl font-bold">6</span>
          <span className="text-lg mt-1 opacity-90">Active Jobs</span>
        </div>
        <div className="flex flex-col items-center">
          <StatArrowUp size={48} className="mb-2" />
          <span className="text-4xl font-bold">0</span>
          <span className="text-lg mt-1 opacity-90">New This Week</span>
        </div>
        <div className="flex flex-col items-center">
          <StatLocation size={48} className="mb-2" />
          <span className="text-4xl font-bold">6</span>
          <span className="text-lg mt-1 opacity-90">Locations</span>
        </div>
      </div>
    </section>
  );
}
