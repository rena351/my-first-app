import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  appCount: integer("app_count").notNull().default(0),
});

export const apps = pgTable("apps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  categoryId: varchar("category_id").notNull(),
  icon: text("icon").notNull(),
  features: jsonb("features").$type<string[]>().notNull(),
  shortcuts: jsonb("shortcuts").$type<string[]>().notNull(),
});

export const suites = pgTable("suites", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  color: text("color").notNull(),
  appIds: jsonb("app_ids").$type<string[]>().notNull(),
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export const insertAppSchema = createInsertSchema(apps).omit({
  id: true,
});

export const insertSuiteSchema = createInsertSchema(suites).omit({
  id: true,
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export type InsertApp = z.infer<typeof insertAppSchema>;
export type App = typeof apps.$inferSelect;

export type InsertSuite = z.infer<typeof insertSuiteSchema>;
export type Suite = typeof suites.$inferSelect;
