import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, updateSearchTerm } = useRecipeStore();

  const handleChange = (e) => {
    updateSearchTerm(e.target.value);
  };

  return (
    <input
      type="search"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search recipes..."
    />
  );
};

export default SearchBar;