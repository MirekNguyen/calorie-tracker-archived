import { Meal, MealEntry, MealWithEntryId } from '@/components/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getMealEntries = async (): Promise<MealWithEntryId[]> => {
  const mealEntriesArray: MealEntry[] = await axios
    .get('/api/meal-entries')
    .then((response) => response.data);
  console.log(mealEntriesArray);
  const mealsArray: MealWithEntryId[] = mealEntriesArray.map((mealEntry) => ({
    id: mealEntry.meals.id,
    name: mealEntry.meals.name,
    calories: mealEntry.meals.calories,
    mealId: mealEntry.id,
  }));

  return mealsArray;
};

export const useMealEntriesQuery = () => {
  return useQuery<MealWithEntryId[]>({
    queryKey: ['data'],
    queryFn: getMealEntries,
  });
};
