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
import { FC, useState } from 'react';
import { useMealsQuery } from '../hooks/query/useMealsQuery';
import { useQueryClient } from '@tanstack/react-query';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';

export const Search: FC = () => {
  const { data: mealsList, error, isLoading } = useMealsQuery();
  const queryClient = useQueryClient();
  const [mealName, setMealName] = useState('Example meal');
  const [mealQueryParam, setMealQueryParam] = useState<Meal>();
  const [mealAmount, _setMealAmount] = useState(1);
  const postMealEntry = async (item: Meal, mealAmount: number) => {
    await axios.post(
      '/api/meal-entries',
      JSON.stringify({ mealId: item.id, amount: mealAmount }),
    );
    queryClient.invalidateQueries({ queryKey: ['data'] });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mealQueryParam) return;
    postMealEntry(mealQueryParam, event.currentTarget.amount.value);
  };
  return (
    // div settings max height
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add meal entry</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add meal</DialogTitle>
            <DialogDescription>
              Make changes to your meal entry here. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mealName" className="text-right">
                Meal
              </Label>
              <Input
                id="mealName"
                defaultValue="Pedro Duarte"
                value={mealName}
                className="col-span-3"
                disabled
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input id="amount" defaultValue="1" className="col-span-3" type='number' step='0.01' />
            </div>
            <Command className='h-[200px]'>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Meals">
                  {isLoading && <p>Loading...</p>}
                  {error && <p>Error: {error.message}</p>}
                  {mealsList?.map((query, index) => (
                    <CommandItem
                      key={index}
                      onSelect={() => {
                        setMealName(query.name);
                        setMealQueryParam(query);
                      }}
                    >
                      {query.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
