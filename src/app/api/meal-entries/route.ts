import { findMealById, getMealIdByName } from '@/actions/meal-actions';
import {
  deleteMealEntry,
  findMealEntries,
  findMealEntriesByDate,
  postMealEntry,
} from '@/actions/meal-entry-actions';
import { format } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const mealEntries = await findMealEntriesByDate(
    format(new Date(), 'yyyy-MM-dd'),
  );
  return NextResponse.json(mealEntries);
}

export async function POST(req: NextRequest) {
  const request = await req.json();
  try {
    const { id } = await findMealById(request.mealId);
    const amount: number = request.amount;
    const res = await postMealEntry(id, amount);
    return NextResponse.json(res);
  } catch {
    return NextResponse.json({ message: 'Meal not found' }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest) {
  const { mealId } = await req.json();
  try {
    const res = await deleteMealEntry(mealId);
    return NextResponse.json(res);
  } catch {
    return NextResponse.json({ message: 'Meal not found' }, { status: 404 });
  }
}
