import { relations } from "drizzle-orm";
import { date, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  calorie_intake: int("calorie_intake").notNull(),
});

export const meals = mysqlTable("ingredient", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  calories: int("calories").notNull(),
});

export const mealEntries = mysqlTable("meal_entry", {
  id: int("id").primaryKey().autoincrement(),
  meal_id: int("meal_id").references(() => meals.id),
  date: date("date").notNull(),
});

export const meal_entriesRelations = relations(mealEntries, ({ many }) => ({
  meals: many(meals),
}));

export const mealsRelations = relations(meals, ({ one }) => ({
  meal_entries: one(mealEntries, {
    fields: [meals.id],
    references: [mealEntries.id],
  }),
}));
