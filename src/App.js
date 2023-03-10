import React from 'react';
import Layout from './components/Layout';
import RandomCocktails from './components/RandomCocktails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RandomCocktails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
