"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const NewItem = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? "Close" : "Add New Item"}
      </Button>
    </>
  );
};
