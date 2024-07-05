"use client";
import { NewItem } from "@/app/dashboard/new-item";
import { Ingredient } from "@/components/types";
import axios from "axios";
import { FC, useEffect, useState } from "react";

export const FoodLog: FC = () => {
  const [mealEntryList, setMealEntryList] = useState<Ingredient[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/meal-entry");
      setMealEntryList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Food Log</h2>
      <div className="space-y-4">
        <NewItem />
        {mealEntryList.map((mealEntry) => (
          <li
            key={mealEntry.name}
            className="text-gray-700 dark:text-gray-300"
          >
            {mealEntry.name}
          </li>
        ))}
      </div>
    </div>
  );
};
