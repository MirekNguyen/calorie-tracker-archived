import { CalendarIcon } from "@/app/components/CalendarIcon";
import { FoodLog } from "@/app/food-log";
import React, { SVGProps } from "react";
import fs from 'fs';
import path from 'path';

type Ingredients = {
  name: string,
  calories: number,
}

const DailyIntake = async () => {
  const filePath = path.resolve(process.cwd(), 'db/ingredients.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const ingredients: Ingredients[] = await JSON.parse(fileContents);
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
              1,850{" "}
              <span className="text-2xl font-normal text-gray-500 dark:text-gray-400">
                / 2,000
              </span>
            </div>
            <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              92%
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Breakfast</h3>
                <p className="text-gray-500 dark:text-gray-400">450 calories</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Lunch</h3>
                <p className="text-gray-500 dark:text-gray-400">650 calories</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dinner</h3>
                <p className="text-gray-500 dark:text-gray-400">750 calories</p>
              </div>
            </div>
          </div>
        </div>
        <FoodLog />
      </div>
    </div>
  );
};

export default DailyIntake;
