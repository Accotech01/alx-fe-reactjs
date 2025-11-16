import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoriteList = () => {
  const { favorites } = useRecipeStore();

  if (favorites.length === 0) {
    return <p>No favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;