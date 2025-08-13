import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const MemberSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, default: "" },
    email: { type: String, trim: true },
    avatarUrl: { type: String, trim: true },
  },
  { timestamps: true }
);

export type Member = InferSchemaType<typeof MemberSchema> & { _id: string };

export const MemberModel: Model<Member> =
  (mongoose.models.Member as Model<Member>) ||
  mongoose.model<Member>("Member", MemberSchema);

export default MemberModel;


