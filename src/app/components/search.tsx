'use client';
import { Meal } from '@/components/types';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

type SearchProps = {
  meals: Meal[];
};

export const Search: FC<SearchProps> = () => {
  useEffect(() => {
    const fetchMeals = async () => {
      const mealsArray: Meal[] = await axios
        .get('/api/meals')
        .then((response) => response.data);
      setMealsList(mealsArray);
    };
    fetchMeals();
  }, []);
  const [mealsList, setMealsList] = useState<Meal[]>([]);
  const handleAddItem = async (item: Meal) => {
    await axios.post('/api/meal-entries', JSON.stringify({ mealId: item.id }));
  };
  return (
    <>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Meals">
            {mealsList.map((query, index) => (
              <CommandItem key={index} onSelect={() => handleAddItem(query)}>
                {query.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </>
  );
};
