import mongoose, { Schema, type Model, type InferSchemaType } from "mongoose"

const ContactMessageSchema = new Schema(
  {
    fullname: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    email: { type: String, trim: true }, // Optional email field
    website: { type: String, trim: true }, // Track which website the message came from
    status: {
      type: String,
      required: true,
      enum: ["unread", "read", "replied", "archived"],
      default: "unread",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    source: { type: String, trim: true }, // Contact form source/page
    ipAddress: { type: String, trim: true }, // For tracking/security
    userAgent: { type: String, trim: true }, // Browser info
    isSpam: { type: Boolean, default: false },
    tags: { type: [String], default: [] }, // For categorization
    notes: { type: String }, // Internal notes for staff
    assignedTo: { type: String, trim: true }, // Staff member assigned
    responseDate: { type: Date }, // When response was sent
  },
  { timestamps: true },
)

// Add indexes for better query performance
ContactMessageSchema.index({ status: 1, createdAt: -1 })
ContactMessageSchema.index({ priority: 1, createdAt: -1 })
ContactMessageSchema.index({ fullname: 1 })
ContactMessageSchema.index({ phone: 1 })

export type ContactMessage = InferSchemaType<typeof ContactMessageSchema> & { _id: string }

export const ContactMessageModel: Model<ContactMessage> =
  (mongoose.models.ContactMessage as Model<ContactMessage>) ||
  mongoose.model<ContactMessage>("ContactMessage", ContactMessageSchema)

export default ContactMessageModel
