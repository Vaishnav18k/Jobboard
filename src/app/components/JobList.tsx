import React from "react";
import JobCard from "./JobCard";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function JobList() {
  const jobs = useQuery(api.jobs.getJobs) ?? [];
  return (
    <div className="grid gap-8 py-12 px-4 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard key={job._id} {...job} id={job._id} />
      ))}
    </div>
  );
}
