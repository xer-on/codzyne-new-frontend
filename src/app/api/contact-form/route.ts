import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongoose";
import ContactMessageModel from "@/models/Message";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-templates/template";

// Define a Zod schema for request validation
const contactMessageSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    // Validate request body using Zod
    const parsedData = contactMessageSchema.parse(body);

    const { fullname, phone, message, website } = parsedData;

    const newMessage = await ContactMessageModel.create({
      fullname,
      phone,
      message,
      website: website || request.headers.get("referer") || "Unknown",
    });

  //   const resend = new Resend(process.env.RESEND_API_KEY);
  // const { data, error } = await resend.emails.send({
  //   from: 'shahadatjaman228@gmail.com',
  //   to: 'shahadatjaman228@gmail.com',
  //   subject: 'Hello world',
  //   react: EmailTemplate({ fullname, phone, message}),
  // });

  // console.log('error', error);
  // console.log('data', data)


    return NextResponse.json({ success: true, data: newMessage });
  } catch (error:any) {
    console.error("Error processing contact form:", error);

    // Handle Zod validation errors specifically
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process contact form submission" },
      { status: 500 }
    );
  }
}
