import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
        setCocktails(response.data.drinks);
      } catch (err) {
        console.log(err);
      }
    };

    getCocktails();

    return () => {
      controller.abort();
    };
  }, [id]);

  console.log(cocktails);

  let cocktailsElements;

  if (cocktails) {
    cocktailsElements = cocktails.map((cocktail, index) => (
      <Link
        key={cocktail.idDrink}
        to={`/cocktails/details/${cocktail.idDrink}`}
        state={{ cocktail }}
      >
        <CocktailsItem cocktail={cocktail} />
      </Link>
    ));
  } else {
    cocktailsElements = <h3>No cocktails start with this letter.</h3>;
  }

  return <div className='cocktails--list'>{cocktailsElements}</div>;
};

export default CocktailsList;
