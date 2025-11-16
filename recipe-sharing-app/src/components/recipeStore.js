import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe].filter((r) => r.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    favorites: state.favorites.filter((recipe) => recipe.id !== id),
    recommendations: state.recommendations.filter((recipe) => recipe.id !== id),
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
    filteredRecipes: state.filteredRecipes.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
    favorites: state.favorites.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
    recommendations: state.recommendations.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
  })),
  setSearchTerm: (searchTerm) => set((state) => ({
    searchTerm,
    filteredRecipes: state.recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase())),
  })),
  addFavorite: (recipe) => set((state) => ({
    favorites: [...state.favorites, recipe],
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((recipe) => recipe.id !== id),
  })),
  generateRecommendations: () => {
    const { favorites, recipes } = get();
    const recommendedRecipes = recipes.filter((recipe) => {
      const isFavorite = favorites.some((favorite) => favorite.id === recipe.id);
      if (isFavorite) return false;
      const favoriteIngredients = favorites.flatMap((favorite) => favorite.ingredients);
      const hasCommonIngredient = recipe.ingredients.some((ingredient) => favoriteIngredients.includes(ingredient));
      return hasCommonIngredient;
    });
    set({ recommendations: recommendedRecipes });
  },
}));

export default useRecipeStore;