import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search by title, ingredients, or description..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        width: "100%",
        marginBottom: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        boxSizing: "border-box"
      }}
    />
  );
};

export default SearchBar;
