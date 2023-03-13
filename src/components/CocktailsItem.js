import React from 'react';

const CocktailsItem = (props) => {
  const { strDrink, strDrinkThumb, strCategory, strAlcoholic } = props.cocktail;
  return (
    <div className='cocktails--item'>
      <img src={strDrinkThumb} alt={strDrink} className='cocktails--image' />
      <h3 className='cocktails--title'>{strDrink}</h3>
      <div className='cocktails--info'>
        <p>
          <span>Category:</span> {strCategory}
        </p>
        <p>
          <span>Type:</span> {strAlcoholic}
        </p>
      </div>
    </div>
  );
};

export default CocktailsItem;
