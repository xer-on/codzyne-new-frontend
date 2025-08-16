
import { connectToDatabase } from "@/lib/mongoose";
import ContactMessageModel from "@/models/Message";
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();

    const { id } = await params;
    const message = await ContactMessageModel.findById(id);
    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: message });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await request.json()

    await connectToDatabase();

    const updatedMessage = await ContactMessageModel.findByIdAndUpdate(id, body)

    if (!updatedMessage) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    return Response.json({ success: true, data: updatedMessage });
    
  } catch (error) {
    console.error("Error updating message:", error)
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await connectToDatabase();


    const success = await ContactMessageModel.deleteOne({_id:id});

    if (!success) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting message:", error)
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 })
  }
}
