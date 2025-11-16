import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe].filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
    filteredRecipes: state.filteredRecipes.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
  })),
  updateSearchTerm: (searchTerm) => set((state) => ({
    searchTerm,
    filteredRecipes: state.recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase())),
  })),
}));

export default useRecipeStore;