import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header--container'>
      <Link to='/'>
        <h1 className='header--title'>Cocktail Connaisseur</h1>
      </Link>
    </header>
  );
};

export default Header;
