import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const AdminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, default: "Admin" },
  },
  { timestamps: true }
);

export type Admin = InferSchemaType<typeof AdminSchema> & { _id: string };

export const AdminModel: Model<Admin> =
  (mongoose.models.Admin as Model<Admin>) ||
  mongoose.model<Admin>("Admin", AdminSchema);

export default AdminModel;


