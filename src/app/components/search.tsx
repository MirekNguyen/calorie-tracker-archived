'use client';
import { Meal } from '@/components/types';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import axios from 'axios';
import { FC } from 'react';
import { useMealsQuery } from '../hooks/query/useMealsQuery';
import { useQueryClient } from '@tanstack/react-query';

export const Search: FC = ({ setShowAddForm }) => {
  const { data: mealsList, error, isLoading } = useMealsQuery();
  const queryClient = useQueryClient();
  const postMealEntry = async (item: Meal) => {
    setShowAddForm(false);
    await axios.post('/api/meal-entries', JSON.stringify({ mealId: item.id }));
    queryClient.invalidateQueries({ queryKey: ['data'] });
  };
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Meals">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {mealsList?.map((query, index) => (
            <CommandItem key={index} onSelect={() => postMealEntry(query)}>
              {query.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
