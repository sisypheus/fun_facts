import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const facts = sqliteTable("facts", {
  id: integer("id").primaryKey(),
  content: text("content")
});
