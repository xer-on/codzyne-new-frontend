export const runtime = "nodejs";
import { connectToDatabase } from "@/lib/mongoose";
import AdminModel from "@/models/Admin";
import { createSession, SESSION_COOKIE } from "@/lib/auth";
import { NextResponse } from "next/server";

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
    const token = await createSession(admin._id.toString());
    const res = NextResponse.json({ success: true }, { status: 200 });
    res.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  } catch (e) {
    console.log('e at 28', e)
    return new Response(JSON.stringify({ success: false, message: "Login failed" }), { status: 500 });
  }
}


