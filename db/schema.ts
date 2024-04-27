import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("facts", {
  id: integer("id").primaryKey(),
  content: text("content")
});
