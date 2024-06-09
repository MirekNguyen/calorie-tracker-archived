import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  calorie_intake: int("calorie_intake").notNull(),
});

export const ingredients = mysqlTable("ingredients", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  calories: int("calories").notNull()
});
