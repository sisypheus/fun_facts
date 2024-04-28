import { db } from "@/db";
import { facts } from "@/db/schema";
import { sql } from "drizzle-orm";

export const dynamic = 'force-dynamic'
export async function GET() {
  const factRes = db.select({ content: facts.content }).from(facts).orderBy(sql`RANDOM()`).limit(1).get();

  const { content } = factRes ?? "" as any;

  return Response.json(content);
}