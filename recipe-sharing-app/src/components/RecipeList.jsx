import React from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) =>
    searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "16px" }}>
      <SearchBar />

      {recipes.length === 0 ? (
        <p style={{ color: "#555", marginTop: "16px" }}>No recipes found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "12px",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0" }}>{recipe.title}</h3>
              <p style={{ margin: "0 0 8px 0" }}>{recipe.description}</p>
              {recipe.ingredients && (
                <p style={{ margin: 0, fontSize: "0.9em", color: "#555" }}>
                  Ingredients: {recipe.ingredients.join(", ")}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
