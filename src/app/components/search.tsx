"use client";
import { Ingredient } from "@/components/types";
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
} from "@/components/ui/command";
import axios from "axios";
import { FC, useState } from "react";

type SearchProps = {
  ingredients: Ingredient[];
};

export const Search: FC<SearchProps> = ({ ingredients }) => {
  const [ingredientList, setIngredientList] = useState(ingredients);
  const handleAddItem = async (item: Ingredient) => {
    await axios.post("/api/meal-entry", JSON.stringify(item))
  };
  return (
    <>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Ingredients">
            {ingredientList.map((query, index) => (
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
