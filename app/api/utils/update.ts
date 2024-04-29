import { db } from "@/db";
import { displayed_facts, facts } from "@/db/schema";
import { sql } from "drizzle-orm";

export const dynamic = 'force-dynamic'
export function updateFod() {

  const random = db.select().from(facts).orderBy(sql`RANDOM()`).limit(1).get();

  const today = new Date().toLocaleDateString()

  db.insert(displayed_facts).values({fact_id: random?.id, date: today}).run();

  return random;
}