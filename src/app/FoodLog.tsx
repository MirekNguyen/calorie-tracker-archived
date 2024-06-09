import { fetchUsers } from "@/app/_actions";
import { FilePenIcon } from "@/app/components/FilePenIcon";
import { getUsers } from "@/app/test/getUsers";
import { useEffect, useState } from "react";

type Ingredient = {
  name: string,
  calories: number,
}

export const FoodLog = async () => {
  const ingredients : Ingredient[] = [
    {
      name: "Oatmeal with Berries",
      calories: 350,
    },
    {
      name: "Grilled Chicken Salad",
      calories: 450,
    },
    {
      name: "Baked Salmon with Roasted Veggies",
      calories: 550,
    },
    {
      name: "Apple with Peanut Butter",
      calories: 200,
    },
  ];
  const users = await fetchUsers();
  console.log(users);

  return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Food Log</h2>
        <div className="space-y-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
        {ingredients.map((ingredient, index) => (
          <>
          <div key={index} className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            Food
          </div>
          <div key={index}>
            <h3 className="text-lg font-bold">{ingredient.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{ingredient.calories} calories</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <FilePenIcon className="w-5 h-5" />
          </div>
          </>
        ))}
        </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              Breakfast
            </div>
            <div>
              <h3 className="text-lg font-bold">Oatmeal with Berries</h3>
              <p className="text-gray-500 dark:text-gray-400">350 calories</p>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <FilePenIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
              Lunch
            </div>
            <div>
              <h3 className="text-lg font-bold">Grilled Chicken Salad</h3>
              <p className="text-gray-500 dark:text-gray-400">450 calories</p>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <FilePenIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
              Dinner
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Baked Salmon with Roasted Veggies
              </h3>
              <p className="text-gray-500 dark:text-gray-400">550 calories</p>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <FilePenIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Snack
            </div>
            <div>
              <h3 className="text-lg font-bold">Apple with Peanut Butter</h3>
              <p className="text-gray-500 dark:text-gray-400">200 calories</p>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <FilePenIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-6">
        </div>
      </div>

  );
}
