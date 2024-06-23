import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  calorie_intake: int("calorie_intake").notNull(),
});

export const meals = mysqlTable("ingredient", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  calories: int("calories").notNull()
});

export const meal_entries = mysqlTable("meal_entry", {
  id: int("id").primaryKey().autoincrement(),
});
