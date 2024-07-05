import { fetchMealEntries, postMealEntry } from "@/app/_actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const response = await fetchMealEntries();
  return NextResponse.json(response);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const response = await postMealEntry(name);
  return NextResponse.json(response);
}
