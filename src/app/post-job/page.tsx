"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

export default function PostJobPage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full-time",
    category: "",
    description: "",    
    requirements: "",
    benefits: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/post-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({
          title: "",
          company: "",
          location: "",
          salary: "",
          type: "Full-time",
          category: "",
          description: "",
          requirements: "",
          benefits: "",
        });
      } else {
        setError("Failed to post job.");
      }
    } catch (err) {
      setError("Error posting job.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <button
          onClick={() => router.push("/")}
          style={{
            display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "none", borderRadius: 8, padding: "10px 18px", marginBottom: 28, fontSize: 18, cursor: "pointer", boxShadow: "0 1px 4px #0001"
          }}
        >
          <span style={{ fontSize: 22 }}>&larr;</span> Back to Jobs
        </button>
      <div className="max-w-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Post a Job</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">Job Title*</label>
            <input name="title" value={form.title} onChange={handleChange} required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">Company*</label>
            <input name="company" value={form.company} onChange={handleChange} required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">Location*</label>
            <input name="location" value={form.location} onChange={handleChange} required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">Salary</label>
            <input name="salary" value={form.salary} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">Category</label>
            <select name="category" value={form.category} onChange={handleChange} className="w-full border rounded-md px-3 py-2">
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Product">Product</option>
              <option value="Data Science">Data Science</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">Job Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded-md px-3 py-2">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Job Description*</label>
            <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Requirements <span className="text-xs text-gray-500"></span></label>
            <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={2} placeholder="e.g. 3+ years experience, React, Team player" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Benefits <span className="text-xs text-gray-500"></span></label>
            <textarea name="benefits" value={form.benefits} onChange={handleChange} rows={2} placeholder="e.g. Remote work, Health insurance" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <div className="flex gap-4 mt-2">
              <button type="submit" disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
                {loading ? "Posting..." : "Post Job"}
              </button>
              <button type="button" onClick={() => router.push("/")} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-md">
                Cancel
              </button>
            </div>
          </div>
          
          {success && <div className="text-green-600 text-center mt-2">Job posted successfully!</div>}
          {error && <div className="text-red-600 text-center mt-2">{error}</div>}
        </form>








        
      </div>
    </div>
  );
}
