export type Ingredient = {
  name: string;
  calories: number;
};

export type MealEntry = {
  id: number;
  name: string;
  date: Date;
  mealId: number;
  meals: Meal;
};

export type Meal = {
  id: number;
  name: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
};

// export type MealWithEntryId = Meal & Pick<MealEntry, "mealId">;
export type MealWithEntryId = Meal & { mealId: number };
