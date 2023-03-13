import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState({});

  const getRandomCocktail = async () => {
    try {
      const response = await axios.get(
        'http://www.thecocktaildb.com/api/json/v1/1/random.php'
      );
      setRandomCocktail(response.data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomCocktail();
  }, []);

  console.log(randomCocktail);

  return (
    <div className='random--container'>
      <h2 onClick={() => window.location.reload()}>Try A Random Cocktail</h2>

      <Link
        to={`/cocktails/details/${randomCocktail.idDrink}`}
        state={{ cocktail: randomCocktail }}
      >
        <div className='random--info'>
          <h1>{randomCocktail.strDrink}</h1>
          <div className='random--subinfo'>
            <p>
              <span>Category:</span> {randomCocktail.strCategory}
            </p>
            <p>
              <span>Type:</span> {randomCocktail.strAlcoholic}
            </p>
            <p>
              <span>Glass:</span> {randomCocktail.strGlass}
            </p>
          </div>
          <img
            src={randomCocktail.strDrinkThumb}
            alt={randomCocktail.strDrink}
          />
        </div>
      </Link>
    </div>
  );
};

export default RandomCocktail;
