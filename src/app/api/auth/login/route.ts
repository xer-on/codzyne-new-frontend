export const runtime = "nodejs";
import { connectToDatabase } from "@/lib/mongoose";
import AdminModel from "@/models/Admin";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();
    console.log('email', email)
    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    const normalizedPassword = String(password ?? "").trim();
    if (!normalizedEmail || !normalizedPassword) {
      return new Response(JSON.stringify({ success: false, message: "Missing email or password" }), { status: 400 });
    }
    const admin = await AdminModel.findOne({ email: normalizedEmail });

    console.log('admin', admin);
    if (!admin) {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), { status: 401 });
    }

    const isMatch = await bcrypt.compare(normalizedPassword, admin.passwordHash);

    console.log('isMatch', isMatch)
    if (!isMatch) {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), { status: 401 });
    }

    // If matched, create session
    await createSession(admin._id.toString());
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.log('e at 28', e)
    return new Response(JSON.stringify({ success: false, message: "Login failed" }), { status: 500 });
  }
}


