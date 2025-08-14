export const runtime = "nodejs";
import { NextRequest } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongoose";

import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import ClientModel from "@/models/Client";

const ClientInputSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  email: z.string().email("Invalid email format").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  description: z.string().optional().or(z.literal("")),
  clientType: z.string().optional().or(z.literal("")),
  logoUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export async function GET() {
  try {
    await connectToDatabase();
    const clients = await ClientModel.find({}).sort({ createdAt: -1 }).lean();
    return Response.json({ success: true, data: clients });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch clients" }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const json = await req.json();

    const parsed = ClientInputSchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, message: parsed.error.flatten() }),
        { status: 400 }
      );
    }

    const token = (await cookies()).get("admin_session")?.value;
    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401 }
      );
    }

    try {
      await verifyAuthToken(token);
    } catch {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401 }
      );
    }

    const created = await ClientModel.create(parsed.data);
    return new Response(
      JSON.stringify({ success: true, data: created }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to create client" }),
      { status: 500 }
    );
  }
}
