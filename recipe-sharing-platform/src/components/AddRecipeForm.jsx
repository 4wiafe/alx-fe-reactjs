import { useState } from "react";

export default function AddRecipeForm() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleRecipeTitle(event) {
    setRecipeTitle(event.target.value);
  }

  function handleIngredients(event) {
    setIngredients(event.target.value);
  }

  function handleInstructions(event) {
    setInstructions(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-5">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Add Recipe
    </h2>

    <label className="flex flex-col text-sm font-medium text-gray-700">
      Recipe Title
      <input
        type="text"
        name="recipe-title"
        id="recipe-title"
        className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleRecipeTitle}
        required
      />
    </label>

    <label className="flex flex-col text-sm font-medium text-gray-700">
      Ingredients
      <textarea
        name="ingredients"
        id="ingredients"
        rows="3"
        className="mt-1 rounded-md border border-gray-300 p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleIngredients}
        required
      ></textarea>
    </label>

    <label className="flex flex-col text-sm font-medium text-gray-700">
      Steps
      <textarea
        name="instructions"
        id="instructions"
        rows="4"
        className="mt-1 rounded-md border border-gray-300 p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleInstructions}
        required
      ></textarea>
    </label>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors sm:w-auto sm:px-6"
    >
      Add Recipe
    </button>
  </form>
</div>
  );
}
