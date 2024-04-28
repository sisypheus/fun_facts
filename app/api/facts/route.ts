import { db } from "@/db";
import { facts } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function GET() {
  const fact = db.select().from(facts).orderBy(sql`RANDOM()`).limit(1).get();

  return Response.json(fact);
}