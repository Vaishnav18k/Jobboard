'use client';
import React from "react";

//type defintion
import { useRouter } from "next/navigation";

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
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col gap-4 w-full max-w-2xl mx-auto hover:shadow-xl transition-shadow cursor-pointer hover:ring-2 hover:ring-blue-400"
      onClick={() => router.push(`/jobs/${id}`)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { router.push(`/jobs/${id}`); } }}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl bg-blue-50 rounded-xl p-2">{companyLogo}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <div className="text-gray-600 text-sm mt-1">{company} &bull; {location}</div>
        </div>
        <div className="ml-auto flex gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{type}</span>
        </div>
      </div>
      <div className="text-gray-700 text-base line-clamp-2">{description}</div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-green-700 font-semibold text-base">{salary}</span>
        <span className="text-gray-400 text-xs">Posted {postedDate}</span>
      </div>
    </div>
  );
}
