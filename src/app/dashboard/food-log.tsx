'use client';
import { NewItem } from '@/app/dashboard/new-item';
import { Meal, MealWithEntryId } from '@/components/types';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useMealEntriesQuery } from '../hooks/query/useMealEntriesQuery';
import { FilePenIcon } from '../components/file-pen-icon';
import { TrashIcon } from '../components/trash-bin-icon';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Search } from '../components/search';
import { useQueryClient } from '@tanstack/react-query';

export const FoodLog: FC<{setCalorieIntake: Dispatch<SetStateAction<number>>}> = ({ setCalorieIntake }) => {
  const queryClient = useQueryClient();
  const { data: mealEntries, error, isLoading } = useMealEntriesQuery();
  useEffect(() => {
    const totalCalories =
      mealEntries
        ?.reduce((acc, meal) => acc + meal.calories * meal.amount, 0)
        .toFixed() || 0;
    setCalorieIntake(totalCalories);
  }, [mealEntries, setCalorieIntake]);

  const handleDelete = async (id: number) => {
    console.log(`Deleting meal with id: ${id}`);
    const response = await axios.delete(`/api/meal-entries/${id}`);
    queryClient.invalidateQueries({ queryKey: ['data'] });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Food Log</h2>
        <div className="max-h-[500px] overflow-y-auto">
          <Search />
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="space-y-4">
        {mealEntries?.map((meal: MealWithEntryId, index: number) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_auto] items-center gap-4"
          >
            <div>
              <h3 className="text-lg font-bold">{meal.name}</h3>
              <div className="grid grid-cols-5 gap-4 text-gray-500 dark:text-gray-400">
                <div>
                  <span className="font-medium">Calories:</span>{' '}
                  {(meal.calories * meal.amount).toFixed(1)}
                </div>
                <div>
                  <span className="font-medium">Protein:</span>{' '}
                  {(meal.proteins * meal.amount).toFixed(1)}g
                </div>
                <div>
                  <span className="font-medium">Fat:</span>{' '}
                  {(meal.fats * meal.amount).toFixed(1)}g
                </div>
                <div>
                  <span className="font-medium">Carbs:</span>{' '}
                  {(meal.carbs * meal.amount).toFixed(1)}g
                </div>
                <div>
                  <span className="font-medium">Amount:</span> {meal.amount}
                </div>
              </div>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(meal.mealId)}
              >
                <TrashIcon className="w-5 h-5" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
