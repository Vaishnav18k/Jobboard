"use client";
import React from "react";

import { useRouter } from "next/navigation";
//type defintion
export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  type: string;
  salary: string;
  description: string;
  postedDate: string;
  companyLogo?: string;
}

export default function JobCard({
  id,
  title,
  company,
  location,
  category,
  type,
  salary,
  description,
  postedDate,
  companyLogo,
}: JobCardProps) {
  const router = useRouter();
  return (
   

    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-gray-200 hover:border-blue-300"
      onClick={() => router.push(`/jobs/${id}`)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          router.push(`/jobs/${id}`);
        }
      }}
    >
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{companyLogo}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 font-medium">{company}</p>
            </div>
          </div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-50 text-blue-700 hover:bg-blue-100">
            {category}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-map-pin text-gray-400"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-dollar-sign text-gray-400"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span>{salary}</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">
            We are looking for an experienced Frontend Developer to join our
            dynamic team. You will be responsible for developing user-facing web
            applications using modern JavaScript frameworks and ensuring optimal
            user experience.
          </p>
          <div className="flex items-center justify-between pt-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs">
              {type}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-calendar"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span>{postedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
