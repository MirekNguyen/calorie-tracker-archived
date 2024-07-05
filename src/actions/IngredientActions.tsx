import { fetchIngredients, postIngredient } from "@/app/_actions";
import { CommandItem } from "@/components/ui/command";

export const IngredientActions = async ({ ingredient }) => {
  async function insertIngredient() {
    console.log(ingredient);
    await fetchIngredients();
  }
  return (
    <>
      <CommandItem key={ingredient} onSelect={insertIngredient}>
        {ingredient}
      </CommandItem>
    </>
  );
}
