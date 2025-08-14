export const runtime = "nodejs";
import { connectToDatabase } from "@/lib/mongoose";
import AdminModel from "@/models/Admin";
import { createSession } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    const normalizedPassword = String(password ?? "").trim();
    if (!normalizedEmail || !normalizedPassword) {
      return new Response(JSON.stringify({ success: false, message: "Missing email or password" }), { status: 400 });
    }
    const admin = await AdminModel.findOne({ email: normalizedEmail });

    if (!admin) {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), { status: 401 });
    }
    const ok = normalizedPassword === admin.password;
    if (!ok) {
      return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), { status: 401 });
    }
    await createSession(admin._id.toString());
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.log('e at 28', e)
    return new Response(JSON.stringify({ success: false, message: "Login failed" }), { status: 500 });
  }
}


