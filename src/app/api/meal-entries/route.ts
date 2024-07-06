import { findMealById, getMealIdByName } from "@/actions/meal-actions";
import {
  findMealEntries,
  findMealEntriesByDate,
  postMealEntry,
} from "@/actions/meal-entry-actions";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const mealEntries = await findMealEntriesByDate(format(new Date(), "yyyy-MM-dd"));
  return NextResponse.json(mealEntries);
}

export async function POST(req: NextRequest) {
  const request = await req.json();
  try {
    const { id } = await findMealById(request.mealId);
    const res = await postMealEntry(id);
    return NextResponse.json(res);
  } catch {
    return NextResponse.json({ message: "Meal not found" }, { status: 404 });
  }
}
