import { fetchIngredients, postIngredient } from "@/app/_actions";
import { Ingredient } from "@/components/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data: Ingredient[] = await fetchIngredients();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const {name, calories} : Partial<Ingredient> = await req.json();
  if (!name || !calories) {
    return NextResponse.json(
      { error: "Invalid input" },
      { status: 400 }
    );
  }
  await postIngredient(name, calories);
  const result = await fetchIngredients();
  return NextResponse.json(
    result
  );
}
