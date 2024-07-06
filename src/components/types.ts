export type Ingredient = {
  name: string;
  calories: number;
};

export type MealEntry = {
  name: string;
  date: Date;
  mealId: number;
  meals: Meal;
};

export type Meal = {
  id: number;
  name: string;
  calories: number;
};
