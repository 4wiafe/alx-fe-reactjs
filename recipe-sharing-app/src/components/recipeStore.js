import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Derived filtered recipes
  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Recipe actions
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id)
    );

    set({ recommendations: recommended.slice(0, 5) });
  },
}));

export { useRecipeStore };
