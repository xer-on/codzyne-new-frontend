export const runtime = "nodejs";
import { destroySession } from "@/lib/auth";

export async function POST() {
  await destroySession();
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}


