import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../stores/recipeStore";
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
        <p>No recipes found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "4px",
              }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>

              <Link to={`/recipes/${recipe.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
