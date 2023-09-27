import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Pokemon from './pages/pokemons.jsx';
import Navbar from "./Navbar.jsx";
import PokemonInfo from "./components/PokemonInfo.jsx";

const App = () => {

  return (
    <div>
      <h1>
        PokeParty
      </h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Pokemon/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/pokemon/:id" element={<PokemonInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;