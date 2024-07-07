'use client';
import { Meal } from '@/components/types';
import axios from 'axios';

export const postMealEntry = async (item: Meal) => {
  await axios.post('/api/meal-entries', JSON.stringify({ mealId: item.id }));
};

