import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipes.js';

const App = () =>{
  const APP_ID = '4dc0c33d';
  const APP_KEY = 'b8ff02c3fbfe7d796d270d7a427cfa41';
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // const response = await fetch(`https://api.edamam.com/api/recipes/v2/212?type=public&app_id=4dc0c33d&app_key=b8ff02c3fbfe7d796d270d7a427cfa41`)
    const data = await response.json()
    // console.log(data.hits)
    setRecipes(data.hits)

  }

  const updateSearch = (e) =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();           //prevents page refresh
    setQuery(search);
    setSearch('')
  }

  return (
    <div className='App'>
    <div id="edamam-badge" data-color="white"></div>
    <form onSubmit={getSearch} className='search-form'>
      <input type='text' className='search-bar' value={search} onChange={updateSearch}/>
      <button className='search-button'>Search</button>
    </form>
    <div className='recipes'>
      {recipes.map(
        recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        )
      )}
    </div>
  </div>
)
}

export default App;
