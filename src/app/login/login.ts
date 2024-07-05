"use client";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { FormEvent } from "react";

const router = useRouter();
export const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const email = (event.currentTarget.email as HTMLInputElement).value;
  const password = (event.currentTarget.password as HTMLInputElement).value;
  const response = await axios.post("/api/login", { email, password });
  if (response.data.code === 200) {
    return NextResponse.redirect(new URL("/"));
  }
  redirect("/login");
};
