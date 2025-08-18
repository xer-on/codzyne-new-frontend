import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export type Product = InferSchemaType<typeof ProductSchema> & { _id: string };

export const ProductModel: Model<Product> =
  (mongoose.models.Product as Model<Product>) ||
  mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
