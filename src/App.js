import React from 'react';
import Layout from './components/Layout';
import CocktailsNav from './components/CocktailsNav';
import CocktailsList from './components/CocktailsList';
import CocktailDetails from './components/CocktailDetails';
import RandomCocktail from './components/RandomCocktail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RandomCocktail />} />
          <Route path='cocktails' element={<CocktailsNav />}>
            <Route path=':id' element={<CocktailsList />} />
            <Route path='details/:id' element={<CocktailDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
