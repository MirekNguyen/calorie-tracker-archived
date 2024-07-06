import { eq } from "drizzle-orm";
import db from "../../db/db";
import { meals } from "../../db/schema";

export const findMeals = async () => {
  const meals = await db.query.meals.findMany();
  return meals;
};

export const findMealsWithEntries = async () => {
  const mealsWithEntries = await db.query.meals.findMany({
    with: {
      mealEntries: true,
    },
  });
  return mealsWithEntries;
};

export const findMealById = async (id: number) => {
  const meal = await db.query.meals.findFirst({
    where: eq(meals.id, id),
  })
  return meal;
};

export const getMealIdByName = async (name: string) => {
  const id = await db
    .select({ id: meals.id })
    .from(meals)
    .where(eq(meals.name, name));
  return id;
};
