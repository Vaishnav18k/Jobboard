'use client'
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import Header from '../../components/Header';
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

// Define a type for a job object
interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  companyLogo?: string;
}

export default function JobDetail() {
  const params = useParams();
  const id = params.id as Id<"jobs">;
  const job: Job | undefined = useQuery(api.jobs.getJobById, { id }) ?? undefined;
  const router = useRouter();

  if (job === undefined) {
    return <div className="text-center py-20">Loading...</div>;
  }
  if (!job) {
    return <div className="text-center py-20 text-red-500">Job not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <button
          onClick={() => router.push("/")}
          className="mb-8 bg-white px-4 py-2 rounded shadow border border-gray-200 hover:bg-gray-100 flex items-center gap-2"
        >
          <span className="text-xl">←</span> Back to Jobs
        </button>  <div style={{ display: "flex", gap: 32 }}>
       
<div style={{ flex: 2 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: "0 2px 8px #0001" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 18 }}>
                <span style={{ fontSize: 48 }}>{job.companyLogo}</span>
                <div>
                  <h1 style={{ margin: 0, fontSize: 36, fontWeight: 700 }}>{job.title}</h1>
                  <div style={{ fontSize: 24, color: "#444", fontWeight: 500 }}>{job.company}</div>
                  <div style={{ display: "flex", gap: 18, marginTop: 8, color: "#666", fontSize: 16 }}>
                    <span>📍 {job.location}</span>
                    <span>• {job.type}</span>
                    <span>• Posted {new Date(job.postedDate).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: "0 2px 8px #0001" }}>
              <h2 style={{ fontSize: 28, marginBottom: 18 }}>Job Description</h2>
              <p style={{ fontSize: 18, color: "#222", lineHeight: 1.7 }}>{job.description}</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: "0 2px 8px #0001" }}>
              <h3 style={{ fontSize: 22, marginBottom: 12 }}>Requirements</h3>
              <ul style={{ fontSize: 17, color: "#222", paddingLeft: 24 }}>
                {job.requirements.map((req: string, i: number) => (
                  <li key={i} style={{ marginBottom: 6 }}>{req}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px #0001" }}>
              <h3 style={{ fontSize: 22, marginBottom: 12 }}>Benefits</h3>
              <ul style={{ fontSize: 17, color: "#222", paddingLeft: 24 }}>
                {job.benefits.map((ben: string, i: number) => (
                  <li key={i} style={{ marginBottom: 6 }}>{ben}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: "0 2px 8px #0001" }}>
              <h2 style={{ fontSize: 26, marginBottom: 22 }}>Job Details</h2>
              <div style={{ fontSize: 20, marginBottom: 18 }}>
                <span style={{ color: "#666", marginRight: 8 }}>Salary</span>
                <span style={{ color: "#21a121", fontWeight: 600, fontSize: 24 }}>{job.salary}</span>
              </div>
              <div style={{ fontSize: 18, marginBottom: 14 }}>
                <span style={{ color: "#666", marginRight: 8 }}>Category</span>
                <span style={{ background: "#e7f0fa", color: "#2266bb", borderRadius: 16, padding: "2px 14px", fontWeight: 600 }}>{job.category}</span>
              </div>
              <div style={{ fontSize: 18, marginBottom: 14 }}>
                <span style={{ color: "#666", marginRight: 8 }}>Job Type</span>
                <span style={{ background: "#f2f2f2", color: "#222", borderRadius: 16, padding: "2px 14px", fontWeight: 600 }}>{job.type}</span>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: 32, marginBottom: 18, boxShadow: "0 2px 8px #0001", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "16px 0", width: "100%", fontSize: 20, fontWeight: 600, cursor: "pointer", marginBottom: 18 }}>Apply Now</button>
              <button style={{ background: "#f5f5f5", color: "#222", border: "none", borderRadius: 8, padding: "12px 0", width: "100%", fontSize: 18, fontWeight: 500, cursor: "pointer" }}>Save Job</button>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );    
}








