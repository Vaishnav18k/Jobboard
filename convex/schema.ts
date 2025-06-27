
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  jobs: defineTable({
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
  })
});
