export const runtime = "nodejs";
import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import MemberModel from "@/models/Member";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();

    const { id } = await params;
    if (!id) {
      return new Response(JSON.stringify({ success: false, message: "User ID is required" }), {
        status: 400,
      });
    }

    const member = await MemberModel.findOne({ userId:id }).lean();

    if (!member) {
      return new Response(JSON.stringify({ success: false, message: "Member not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ success: true, data: member }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch member" }),
      { status: 500 }
    );
  }
}
