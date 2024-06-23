import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const ingredient = mysqlTable("ingredient", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	calories: int("calories").notNull(),
},
(table) => {
	return {
		ingredient_id: primaryKey({ columns: [table.id], name: "ingredient_id"}),
	}
});

export const ingredients = mysqlTable("ingredients", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	calories: int("calories").notNull(),
},
(table) => {
	return {
		ingredients_id: primaryKey({ columns: [table.id], name: "ingredients_id"}),
	}
});

export const meal_entry = mysqlTable("meal_entry", {
	id: int("id").autoincrement().notNull(),
},
(table) => {
	return {
		meal_entry_id: primaryKey({ columns: [table.id], name: "meal_entry_id"}),
	}
});

export const user = mysqlTable("user", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	calorie_intake: int("calorie_intake").notNull(),
},
(table) => {
	return {
		user_id: primaryKey({ columns: [table.id], name: "user_id"}),
	}
});

export const users = mysqlTable("users", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	calorie_intake: int("calorie_intake").notNull(),
},
(table) => {
	return {
		users_id: primaryKey({ columns: [table.id], name: "users_id"}),
	}
});