export const runtime = "nodejs"
import type { NextRequest } from "next/server"
import { z } from "zod"
import { connectToDatabase } from "@/lib/mongoose"
import JobPostModel from "@/models/JobPost"
import { cookies } from "next/headers"
import { verifyAuthToken } from "@/lib/auth"

const JobPostInputSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  type: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
  description: z.string().min(1, "Job description is required"),
  requirements: z.array(z.string()).default([]),
  responsibilities: z.array(z.string()).default([]),
  salaryRange: z.string().optional().default(""),
  applicationDeadline: z.string().datetime().optional(),
  applicationEmail: z.string().email("Valid email is required"),
  isActive: z.boolean().default(true),
  experienceLevel: z.enum(["Entry Level", "Mid Level", "Senior Level", "Executive"]).default("Mid Level"),
})

export async function GET() {
  try {
    await connectToDatabase()
    const jobPosts = await JobPostModel.find({}).sort({ createdAt: -1 }).lean()
    return Response.json({ success: true, data: jobPosts })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ success: false, message: "Failed to fetch job posts" }), { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase()
    const json = await req.json()
    const parsed = JobPostInputSchema.safeParse(json)
    if (!parsed.success) {
      return new Response(JSON.stringify({ success: false, message: parsed.error.flatten() }), { status: 400 })
    }
    const token = (await cookies()).get("admin_session")?.value
    if (!token) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 })
    }
    try {
      await verifyAuthToken(token)
    } catch {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 })
    }
    const created = await JobPostModel.create(parsed.data)
    return new Response(JSON.stringify({ success: true, data: created }), { status: 201 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ success: false, message: "Failed to create job post" }), { status: 500 })
  }
}
