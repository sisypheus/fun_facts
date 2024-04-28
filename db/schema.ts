import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const facts = sqliteTable("facts", {
  id: integer("id").primaryKey(),
  content: text("content")
});

export const displayed_facts = sqliteTable("displayed_facts", {
  date: integer("date", { mode: 'timestamp' }),
  fact_id: integer("fact_id").references(() => facts.id),
})
