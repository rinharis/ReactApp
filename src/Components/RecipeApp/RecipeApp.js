import React, { useEffect, useState } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

const RecipeApp = () => {
    const APP_ID = "d22358f2";
    const APP_KEY = "21aa7dca1cb9c95b9fe2aa2a08e10c3b";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState();

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        // console.log(data.hits);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        // setSearch('');
    }

    return (
        <div className='RecipeApp'>
            <form onSubmit={() => getSearch()} className='search-form'>
                <ul>
                    <p>Recipe App with edamam.com</p>
                    <input
                        onChange={updateSearch}
                        value={search}
                        className='search-bar'
                        type="text"
                    />
                    <button
                        className='search-button'
                        type='submit'>
                        Search
                    </button>
                </ul>
            </form>
            <div className='recipes'>
                {recipes.map((recipe) => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}
export default RecipeApp;
