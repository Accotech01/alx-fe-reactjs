import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
