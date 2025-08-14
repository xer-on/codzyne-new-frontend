import bcrypt from "bcryptjs";
import { connectToDatabase } from "../src/lib/mongoose";
import AdminModel from "../src/models/Admin";

async function main() {
  const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const password = (process.env.ADMIN_PASSWORD || "").trim();
  const name = (process.env.ADMIN_NAME || "Admin").trim();
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("✖ Missing MONGODB_URI in environment");
    process.exit(1);
  }
  if (!email || !password) {
    console.error("✖ Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment");
    process.exit(1);
  }

  await connectToDatabase();

  const existing = await AdminModel.findOne({ email });
  if (existing) {
    console.log("✓ Admin already exists:", existing.email);
    process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const created = await AdminModel.create({ email, passwordHash, name });
  console.log("✓ Admin created:", created.email);
  process.exit(0);
}

main().catch((err) => {
  console.error("✖ Failed to seed admin:", err);
  process.exit(1);
});


