import React from 'react';

const CocktailsItem = (props) => {
  const { strDrink, strDrinkThumb } = props.cocktail;
  return (
    <div className='cocktails--item'>
      <img src={strDrinkThumb} alt={strDrink} className='cocktails--image' />
      <h3 className='cocktails--title'>{strDrink}</h3>
    </div>
  );
};

export default CocktailsItem;
