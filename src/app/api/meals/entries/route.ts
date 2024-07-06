import { findMealsWithEntries } from "@/actions/meal-actions";
import { NextResponse } from "next/server";

export async function GET() {
  const meals = await findMealsWithEntries();
  return NextResponse.json(meals);
}
