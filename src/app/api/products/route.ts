export const runtime = "nodejs";
import { NextRequest } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongoose";
import MemberModel from "@/models/Member";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import ProductModel from "@/models/ProductModel";

const ProductInputSchema = z.object({
  title: z.string().min(1, "Product title is required"),
  imageUrl: z.string().min(1, "imageUrl is required"),

});



export async function GET() {
  try {
    await connectToDatabase();
    const products = await ProductModel.find({}).sort({ createdAt: -1 }).lean();
    return Response.json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch product" }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const json = await req.json();
    const parsed = ProductInputSchema.safeParse(json);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, message: parsed.error.flatten() }),
        { status: 400 }
      );
    }
    const token = (await cookies()).get("admin_session")?.value;
    if (!token) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
    }
    try {
      await verifyAuthToken(token);
    } catch {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
    }


    const created = await ProductModel.create(parsed.data);
    return new Response(JSON.stringify({ success: true, data: created }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to create product" }),
      { status: 500 }
    );
  }
}


