  // RecipeList component
  import useRecipeStore  from './recipeStore';
  import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
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