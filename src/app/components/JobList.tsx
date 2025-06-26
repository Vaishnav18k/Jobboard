import React from "react";
import JobCard from "./JobCard";
import jobs from "../job.json";

export default function JobList() {
  return (
    <div className="grid gap-8 py-12 px-4 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} id={job.id} />
      ))}


    </div>
  );
}
