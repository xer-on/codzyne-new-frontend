export const runtime = "nodejs";
import { connectToDatabase } from "@/lib/mongoose";
import AdminModel from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!process.env.ADMIN_SEED_TOKEN || token !== process.env.ADMIN_SEED_TOKEN) {
    return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
  }

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME || "Admin";
  if (!email || !password) {
    return new Response(JSON.stringify({ success: false, message: "Missing ADMIN_EMAIL or ADMIN_PASSWORD" }), { status: 400 });
  }
  await connectToDatabase();
  const existing = await AdminModel.findOne({ email: email.toLowerCase() });
  if (existing) {
    return new Response(JSON.stringify({ success: true, message: "Admin already exists" }), { status: 200 });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  await AdminModel.create({ email: email.toLowerCase(), passwordHash, name });
  return new Response(JSON.stringify({ success: true }), { status: 201 });
}


