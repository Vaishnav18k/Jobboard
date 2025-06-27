import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Query: Get all jobs (newest first)
export const getJobs = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("jobs").order("asc").collect();
  },
});

// Query: Get job by id
export const getJobById = query({
  args: { id: v.id("jobs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Mutation: Create a new job
export const createJob = mutation({
  args: {
    title: v.string(),
    company: v.string(),
    location: v.string(),
    salary: v.string(),
    type: v.string(),
    category: v.string(),
    description: v.string(),
    requirements: v.array(v.string()),
    benefits: v.array(v.string()),
    postedDate: v.string(),
    companyLogo: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("jobs", args);
  },
});

// Mutation: Update a job by id (partial update)
export const updateJob = mutation({
  args: {
    id: v.id("jobs"),
    data: v.object({
      title: v.optional(v.string()),
      company: v.optional(v.string()),
      location: v.optional(v.string()),
      salary: v.optional(v.string()),
      type: v.optional(v.string()),
      category: v.optional(v.string()),
      description: v.optional(v.string()),
      requirements: v.optional(v.array(v.string())),
      benefits: v.optional(v.array(v.string())),
      postedDate: v.optional(v.string()),
      companyLogo: v.optional(v.string()),
    })
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, args.data);
    return await ctx.db.get(args.id);
  },
});
