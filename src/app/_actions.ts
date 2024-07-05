import { eq } from "drizzle-orm";
import db from "../../db/db";
import { meal_entries, mealEntries, meals, users } from "../../db/schema";

export async function fetchUsers() {
  const fetchedUsers = await db.select().from(users);
  return fetchedUsers;
}

export async function fetchIngredients() {
  const fetchedIngredients = await db.select().from(meals);
  return fetchedIngredients;
}

export async function fetchUserById(id: number) {
  const user = await db.query.users.findFirst({ where: eq(users.id, id) });
  return user;
}

export async function postIngredient(name: string, calories: number) {
  await db.insert(meals).values({ name, calories }).execute();
}

export async function fetchMealEntries() {
  const fetchedMealEntries = await db.select().from(mealEntries);
  await db.query.mealEntries.findMany({
    with: {
      meals: true,
    },
  });
  return fetchedMealEntries;
}

export async function postMealEntry(mealName: string) {
  const meal = await db.query.meals.findFirst({
    where: eq(meals.name, mealName),
  });
  if (!meal) {
    throw new Error("Meal not found");
  }
  const mealEntries = await db
    .insert(mealEntries)
    .values({ meal_id: meal.id, date: new Date() })
    .execute();
  return {
    message: "Meal entry created",
    status: 201,
  };
}
