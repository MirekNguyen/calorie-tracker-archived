import { Meal } from "@/components/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getMeals = async () => {
  const mealsArray: Meal[] = await axios
    .get('/api/meals')
    .then((response) => response.data);
  return mealsArray;
};
export const useMealsQuery = () => {
  return useQuery({ queryKey: ['meals'], queryFn: getMeals });
};
