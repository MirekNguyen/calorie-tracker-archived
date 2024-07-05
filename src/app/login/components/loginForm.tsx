"use client";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const router = useRouter();
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.email as HTMLInputElement).value;
    const password = (event.currentTarget.password as HTMLInputElement).value;
    const response = await axios.post("/api/login", { email, password });
    if (response.data.code === 200) {
      router.push("/");
    }
  };
  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <p className="mt-2 text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="#"
            className="font-medium hover:underline"
            prefetch={false}
          >
            Register
          </Link>
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleLogin}>
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
