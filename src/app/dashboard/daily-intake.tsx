import React from "react";
import { fetchIngredients, fetchUserById } from "@/app/_actions";
import { FoodLog } from "@/app/dashboard/food-log";
import { CalendarIcon } from "lucide-react";

const DailyIntake = async () => {
  const ingredients = await fetchIngredients();

  const totalCalories = ingredients.reduce((sum, ingredient) => {
    return sum + ingredient.calories;
  }, 0);
  const user = await fetchUserById(1);
  console.log(user);
  console.log("Total Calories:", totalCalories);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Daily Calorie Intake</h2>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                May 1, 2023
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">
              {totalCalories}{" "}
              <span className="text-2xl font-normal text-gray-500 dark:text-gray-400">
                / {user?.calorie_intake} kcal
              </span>
            </div>
            <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              92%
            </div>
          </div>
        </div>
        <FoodLog />
      </div>
    </div>
  );
};

export default DailyIntake;
