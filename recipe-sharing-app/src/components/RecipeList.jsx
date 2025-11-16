  // RecipeList component
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { filteredRecipes, updateSearchTerm, searchTerm } = useRecipeStore();

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

