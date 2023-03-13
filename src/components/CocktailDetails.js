import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const CocktailDetails = () => {
  const cocktail = useLocation().state.cocktail;
  const navigate = useNavigate();

  const ingredientsArray = [];
  const measurementsArray = [];
  const ingredientsObj = {};

  for (const key in cocktail) {
    if (key.includes('Ingredient')) {
      if (cocktail[key]) {
        ingredientsArray.push(cocktail[key]);
      }
    }
  }

  for (const key in cocktail) {
    if (key.includes('Measure')) {
      if (cocktail[key]) {
        measurementsArray.push(cocktail[key]);
      }
    }
  }

  ingredientsArray.forEach(
    (ingredient, i) => (ingredientsObj[ingredient] = measurementsArray[i])
  );

  const ingredientsElements = Object.entries(ingredientsObj).map(
    ([ingredient, measure], index) => (
      <li key={index}>
        {ingredient} {measure ? `- ${measure}` : null}
      </li>
    )
  );

  const instructionsArr = cocktail.strInstructions.split('\r\n\r');

  const instructionsElements = instructionsArr.map((instruction, index) => (
    <li key={index}>{instruction}</li>
  ));
  console.log('instructions', instructionsArr);

  console.log(measurementsArray);

  console.log(cocktail);
  return (
    <div className='details--container'>
      <h1 className='details--heading'>{cocktail.strDrink}</h1>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className='details--img'
      />
      <div className='details--info'>
        <p>
          <span className='details--infoType'>Category:</span>{' '}
          {cocktail.strCategory}
        </p>
        <p>
          <span className='details--infoType'>Type:</span>{' '}
          {cocktail.strAlcoholic}
        </p>
        <p>
          <span className='details--infoType'>Preffered Glass:</span>{' '}
          {cocktail.strGlass}
        </p>
      </div>

      <h3 className='details--subheading'>Ingredients:</h3>
      <ul className='details--list'>{ingredientsElements}</ul>
      <h3 className='details--subheading'>Instructions: </h3>
      <ul className='details--list'>{instructionsElements}</ul>
      <button className='details--button' onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default CocktailDetails;
