import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const JOBS_PATH = path.join(process.cwd(), "src/app/job.json");

export async function POST(req: NextRequest) {
  try {
    let job = await req.json();
    // Parse requirements and benefits as arrays
    if (typeof job.requirements === "string") {
      job.requirements = job.requirements.split(",").map((s: string) => s.trim()).filter(Boolean);
    }
    if (typeof job.benefits === "string") {
      job.benefits = job.benefits.split(",").map((s: string) => s.trim()).filter(Boolean);
    }
    // Read existing jobs
    let jobs = [];
    try {
      const data = await fs.readFile(JOBS_PATH, "utf8");
      jobs = JSON.parse(data);
    } catch (err) {
      // If file doesn't exist or is empty, start with empty array
      jobs = [];
    }
    // Determine next sequential id as string
    let nextId = '1';
    if (jobs.length > 0) {
      const maxId = jobs.reduce((max: number, j: any) => {
        const jid = parseInt(j.id, 10);
        return isNaN(jid) ? max : Math.max(max, jid);
      }, 0);
      nextId = (maxId + 1).toString();
    }
    const postedDate = new Date().toISOString().split('T')[0];
    // Map logo input to companyLogo field
    const newJob = {
      id: nextId,
      title: job.title,
      company: job.company,
      location: job.location,
      category: job.category,
      type: job.type,
      salary: job.salary,
      description: job.description,
      requirements: job.requirements,
      benefits: job.benefits,
      postedDate,
      companyLogo: job.logo || ""
    };
    jobs.push(newJob);
    await fs.writeFile(JOBS_PATH, JSON.stringify(jobs, null, 2), "utf8");
    return NextResponse.json({ success: true, job: newJob });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save job." }, { status: 500 });
  }
}
