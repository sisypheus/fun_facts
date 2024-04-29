import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const facts = sqliteTable("facts", {
  id: integer("id").primaryKey(),
  content: text("content")
});

export const displayed_facts = sqliteTable("displayed_facts", {
  date: text("date").default(sql`(CURRENT_DATE)`),
  fact_id: integer("fact_id").references(() => facts.id),
})
