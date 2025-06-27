'use client';
import React from "react";
import Link from "next/link";
import JobBoardIcon from "./JobBoardIcon";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  return (
  

    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg">
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
                className="lucide lucide-briefcase h-6 w-6 text-white"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">JobBoard</h1>
              <p className="text-xs text-gray-500">Find your dream job</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => router.push('/')}
            >
              Browse Jobs
            </button>
            <button
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === '/post-job' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => router.push('/post-job')}
            >
              Post a Job
            </button>
          </nav>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
         onClick={() => router.push("/post-job")} 
          >
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
              className="lucide lucide-plus h-4 w-4 mr-2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Post Job
          </button>
        </div>
      </div>
    </header>
  );
}
