import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h3>{title}</h3>
            <h5>ingredients :</h5>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : &nbsp; {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;