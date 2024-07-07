import { Meal, MealEntry, MealWithEntryId } from '@/components/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getMealEntries = async (): Promise<MealWithEntryId[]> => {
  const mealEntriesArray: MealEntry[] = await axios
    .get('/api/meal-entries')
    .then((response) => response.data);
  const mealsArray: MealWithEntryId[] = mealEntriesArray.map((mealEntry) => ({
    id: mealEntry.meals.id,
    name: mealEntry.meals.name,
    calories: mealEntry.meals.calories,
    mealId: mealEntry.id,
    proteins: mealEntry.meals.proteins,
    fats: mealEntry.meals.fats,
    carbs: mealEntry.meals.carbs,
  })) satisfies MealWithEntryId[];
  console.log(mealsArray);

  return mealsArray;
};

export const useMealEntriesQuery = () => {
  return useQuery<MealWithEntryId[]>({
    queryKey: ['data'],
    queryFn: getMealEntries,
  });
};
