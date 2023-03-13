import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CocktailsItem from './CocktailsItem';
import axios from 'axios';

const CocktailsList = () => {
  const [cocktails, setCocktails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getCocktails = async () => {
      try {
        const response = await axios.get(
          `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${id}`,
          { signal: controller.signal }
        );
        console.log('drinks', response.data.drinks);
        setCocktails(response.data.drinks);
      } catch (err) {
        console.log(err);
      }
    };

    getCocktails();

    return () => {
      controller.abort();
      console.log('cleanedup');
    };
  }, [id]);

  console.log('cocktails', cocktails);

  let cocktailsElements;

  if (cocktails) {
    cocktailsElements = cocktails.map((cocktail, index) => (
      <CocktailsItem key={cocktail.idDrink} cocktail={cocktail} />
    ));
  } else {
    cocktailsElements = <h3>No cocktails start with this letter.</h3>;
  }

  return <div className='cocktails--list'>{cocktailsElements}</div>;
};

export default CocktailsList;
