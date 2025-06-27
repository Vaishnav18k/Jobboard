import React from "react";
import { StatBriefcase, StatArrowUp, StatLocation } from "./StatIcon";

export default function Hero() {
  return (
    // <section className="w-full flex flex-col items-center justify-center pt-24 pb-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center min-h-[520px]">
    //   <h1 className="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Find Your Dream Job Today</h1>
    //   <p className="text-2xl font-medium mb-12 max-w-3xl mx-auto opacity-90">
    //     Discover thousands of job opportunities from top companies. Your perfect career awaits.
    //   </p>
    //   <div className="flex flex-row gap-16 justify-center mb-4">
    //     <div className="flex flex-col items-center">
    //       <StatBriefcase size={48} className="mb-2" />
    //       <span className="text-4xl font-bold">6</span>
    //       <span className="text-lg mt-1 opacity-90">Active Jobs</span>
    //     </div>
    //     <div className="flex flex-col items-center">
    //       <StatArrowUp size={48} className="mb-2" />
    //       <span className="text-4xl font-bold">0</span>
    //       <span className="text-lg mt-1 opacity-90">New This Week</span>
    //     </div>
    //     <div className="flex flex-col items-center">
    //       <StatLocation size={48} className="mb-2" />
    //       <span className="text-4xl font-bold">6</span>
    //       <span className="text-lg mt-1 opacity-90">Locations</span>
    //     </div>
    //   </div>
    // </section>

    <section>
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover thousands of job opportunities from top companies. Your
              perfect career awaits.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-briefcase h-6 w-6 text-blue-200"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                  <span className="text-3xl font-bold">6</span>
                </div>
                <p className="text-blue-200 text-sm">Active Jobs</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trending-up h-6 w-6 text-blue-200"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span className="text-3xl font-bold">0</span>
                </div>
                <p className="text-blue-200 text-sm">New This Week</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin h-6 w-6 text-blue-200"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-3xl font-bold">6</span>
                </div>
                <p className="text-blue-200 text-sm">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
