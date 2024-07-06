"use client";
import { NewItem } from "@/app/dashboard/new-item";
import axios from "axios";
import { FC, useEffect, useState } from "react";

type MealEntry = {
  name: string,
  date: Date,
  mealId: number,
  meals : Meal
}
type Meal = {
  id: number,
  name: string,
  calories: number
}
export const FoodLog: FC = () => {
  const [mealEntries, setMealEntries] = useState<Meal[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const mealEntriesArray : MealEntry[] = await axios.get("/api/meal-entries").then((response) => response.data);
      const mealsArray: Meal[] = mealEntriesArray.map((mealEntry) => mealEntry.meals);
      setMealEntries(mealsArray);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Food Log</h2>
      <NewItem />
      <div className="space-y-4">
        {mealEntries.map((meal: Meal) => (
          <li
            key={meal.name}
            className="text-gray-700 dark:text-gray-300"
          >
            {meal.name}
          </li>
        ))}
      </div>
    </div>
  );
};
