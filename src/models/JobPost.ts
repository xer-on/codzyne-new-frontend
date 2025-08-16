import mongoose, { Schema, type Model, type InferSchemaType } from "mongoose"

const JobPostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      trim: true,
    },
    description: { type: String, required: true },
    requirements: { type: [String], default: [] },
    responsibilities: { type: [String], default: [] },
    salaryRange: { type: String, trim: true },
    applicationDeadline: { type: Date },
    applicationEmail: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
    experienceLevel: {
      type: String,
      enum: ["Entry Level", "Mid Level", "Senior Level", "Executive"],
      default: "Mid Level",
    },
  },
  { timestamps: true },
)

export type JobPost = InferSchemaType<typeof JobPostSchema> & { _id: string }

export const JobPostModel: Model<JobPost> =
  (mongoose.models.JobPost as Model<JobPost>) || mongoose.model<JobPost>("JobPost", JobPostSchema)

export default JobPostModel
