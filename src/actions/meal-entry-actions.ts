import { eq } from "drizzle-orm";
import db from "../../db/db";
import { format } from "date-fns";
import { mealEntries } from "../../db/schema";

export const findMealEntries = async () => {
  const mealEntries = await db.query.mealEntries.findMany({
    with: {
      meals: true,
    },
  });
  return mealEntries;
};

export const findMealEntriesByDate = async (date: string) => {
  const mealsQuery = await db.query.mealEntries.findMany({
    where: eq(mealEntries.date, date),
    with: {
      meals: true,
    },
  });
  return mealsQuery;
};

export const postMealEntry = async (mealId: number) => {
  const response = await db.insert(mealEntries).values({
    mealId: mealId,
    date: format(new Date(), "yyyy-MM-dd"),
  });
  return response;
};