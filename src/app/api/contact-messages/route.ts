
import { connectToDatabase } from "@/lib/mongoose";
import ContactMessageModel from "@/models/Message";
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

      const message = await ContactMessageModel.find();
      if (!message) {
        return NextResponse.json({ error: "Message not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: message });
    
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
