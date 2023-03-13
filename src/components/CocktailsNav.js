import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const CocktailsNav = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetLinks = alphabet.map((letter, index) => (
    <NavLink
      to={`/cocktails/${letter}`}
      key={index}
      className={({ isActive }) =>
        isActive ? 'cocktails--active' : 'cocktails--links'
      }
    >
      {letter.toUpperCase()}
    </NavLink>
  ));
  return (
    <main className='cocktails--container'>
      <div className='cocktails--linksDiv'>{alphabetLinks}</div>
      <Outlet />
    </main>
  );
};

export default CocktailsNav;
