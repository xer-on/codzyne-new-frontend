import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const ClientSchema = new Schema(
  {
    companyName: { type: String, required: true, trim: true },
    industry: { type: String, required: true, trim: true },
    contactPerson: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    website: { type: String, trim: true },
    address: { type: String, trim: true },
    description: { type: String, trim: true },
    clientType: { type: String, trim: true },
    logoUrl: { type: String, trim: true },
  },
  { timestamps: true }
);

export type Client = InferSchemaType<typeof ClientSchema> & { _id: string };

export const ClientModel: Model<Client> =
  (mongoose.models.Client as Model<Client>) ||
  mongoose.model<Client>("Client", ClientSchema);

export default ClientModel;
