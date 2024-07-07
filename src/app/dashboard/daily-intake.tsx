"use client";
import React, { FC, useState } from "react";
import { FoodLog } from "@/app/dashboard/food-log";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const DailyIntake : FC = () => {
  const today = format(new Date(), 'MMMM, dd');
  const [ calorieIntake, setCalorieIntake ] = useState<number>(0);
  const CALORIE_LIMIT = 2300;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Daily Calorie Intake</h2>
            <div className="flex items-center gap-2">
              {today}
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">
              {calorieIntake}{" "}
              <span className="text-2xl font-normal text-gray-500 dark:text-gray-400">
                / {CALORIE_LIMIT} kcal
              </span>
            </div>
            <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              {((calorieIntake / CALORIE_LIMIT) * 100).toFixed(0)}%
            </div>
          </div>
        </div>
        <FoodLog setCalorieIntake={setCalorieIntake}/>
      </div>
    </div>
  );
};

export default DailyIntake;
