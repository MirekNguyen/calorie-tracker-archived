"use client";
import { Search } from "@/app/components/search";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";

export const NewItem: FC = () => {
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
      {showAddForm && <Search />}
    </>
  );
};
