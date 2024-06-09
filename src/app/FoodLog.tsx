import { fetchIngredients, fetchUsers } from "@/app/_actions";
import { FilePenIcon } from "@/app/components/FilePenIcon";

type Ingredient = {
  name: string;
  calories: number;
};

export const FoodLog = async () => {
  const ingredients = await fetchIngredients();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Food Log</h2>
      <div className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <div
                key={index}
                className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium"
              >
                Food
              </div>
              <div key={index}>
                <h3 className="text-lg font-bold">{ingredient.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {ingredient.calories} calories
                </p>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <FilePenIcon className="w-5 h-5" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
