export const runtime = "nodejs";
import { NextRequest } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongoose";
import MemberModel from "@/models/Member";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";

const MemberInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  bio: z.string().optional().default(""),
  email: z.string().email().optional().or(z.literal("")),
  avatarUrl: z.string().url().optional().or(z.literal("")),
});

export async function GET() {
  try {
    await connectToDatabase();
    const members = await MemberModel.find({}).sort({ createdAt: -1 }).lean();
    return Response.json({ success: true, data: members });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch members" }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const json = await req.json();
    const parsed = MemberInputSchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, message: parsed.error.flatten() }),
        { status: 400 }
      );
    }
    const token = cookies().get("admin_session")?.value;
    if (!token) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
    }
    try {
      await verifyAuthToken(token);
    } catch {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
    }
    const created = await MemberModel.create(parsed.data);
    return new Response(JSON.stringify({ success: true, data: created }), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Failed to create member" }),
      { status: 500 }
    );
  }
}


