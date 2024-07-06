import { findMeals } from "@/actions/meal-actions";
import { NextResponse } from "next/server";

export async function GET() {
  const meals = await findMeals();
  return NextResponse.json(meals);
}
