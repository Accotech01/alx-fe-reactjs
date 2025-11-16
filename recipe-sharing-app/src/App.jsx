import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoriteList from './components/FavouriteList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <div>
            <RecipeList />
            <AddRecipeForm />
          </div>
            } />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
