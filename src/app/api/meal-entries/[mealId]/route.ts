import { deleteMealEntry } from "@/actions/meal-entry-actions";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params } : { params: { mealId: number } }) {
  console.log(`Handling delete request with id: ${params.mealId}`);
  const res = await deleteMealEntry(params.mealId);
  console.log(res);
  return NextResponse.json({ message: "Meal entry deleted" }, { status: 200 });
};
