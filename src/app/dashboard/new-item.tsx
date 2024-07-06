"use client";
import { Search } from "@/app/components/search";
import { Ingredient } from "@/components/types";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FC, useEffect, useState } from "react";

type NewItemProps = {
  ingredients: Ingredient[];
};
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
