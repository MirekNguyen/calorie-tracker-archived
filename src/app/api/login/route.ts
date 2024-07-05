import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  if (data.email === "test@test.com" && data.password === "test") {
    return NextResponse.json(
      { message: "Successfully logged in", code: 200 },
      { status: 200 },
    );
  }
  return NextResponse.json(
    { message: "Incorrect email or password", code: 403 },
    { status: 200 },
  );
}
