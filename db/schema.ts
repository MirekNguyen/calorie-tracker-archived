import { relations } from "drizzle-orm";
import {
  date,
  integer,
  pgTable,
  real,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const countries = pgTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (countries) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(countries.name),
    };
  },
);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
  score: integer("score"),
});

export const userRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 256 }),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.id),
});

export const postRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

export const meals = pgTable("meals", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  calories: integer("calories"),
  proteins: real("proteins"),
  carbs: real("carbs"),
  fats: real("fats"),
});

export const mealRelations = relations(meals, ({ many }) => ({
  mealEntries: many(mealEntries),
}));

export const mealEntries = pgTable("meal_entries", {
  id: serial("id").primaryKey(),
  date: date("date"),
  mealId: integer("meal_id")
    .notNull()
    .references(() => meals.id),
  amount: integer("amount"),
});

export const mealEntryRelations = relations(mealEntries, ({ one }) => ({
  meals: one(meals, {
    fields: [mealEntries.mealId],
    references: [meals.id],
  }),
}));

