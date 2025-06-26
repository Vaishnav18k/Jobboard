import React from "react";
import Link from "next/link";
import JobBoardIcon from "./JobBoardIcon";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm border-b border-gray-100 z-10">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 rounded-xl p-2 flex items-center justify-center">
              <JobBoardIcon size={20} />
            </span>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">JobBoard</span>
          </div>
          <span className="text-gray-500 text-md font-normal mt-1 ml-8">Find your dream job</span>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <Link href="#browse" className="text-blue-600 font-medium hover:underline">Browse Jobs</Link>
        <Link href="#post" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Post a Job</Link>
        <button className="ml-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl text-base shadow transition-colors">
          <span className="text-xl">+</span> Post Job
        </button>
      </nav>
    </header>
  );
}
