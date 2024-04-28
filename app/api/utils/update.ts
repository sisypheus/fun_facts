import { db } from "@/db";
import { displayed_facts, facts } from "@/db/schema";
import { sql } from "drizzle-orm";
import { SQLiteTimestamp } from "drizzle-orm/sqlite-core";

export function updateFod() {

  const random = db.select().from(facts).orderBy(sql`RANDOM()`).limit(1).get();

  const today = new Date()

  db.insert(displayed_facts).values({fact_id: random?.id, date: today}).run();

  return random;
}