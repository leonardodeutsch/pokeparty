import React from "react";
import { useState } from "react";
import pokemons from "./utilities/pokemons.js";

const App = () => {
  const [pokemonSearched, setPokemonSearched] = useState('');

  const searchPokemon = (e) => {
    setPokemonSearched(e.target.value);
  }

  return (
    <div>
      <h1>
        PokeParty
      </h1>
      <input type="text" className="search-pokemon" onChange={searchPokemon}/>
      <div className="pokemon-list">
        {pokemons.map(pokemon => (
          <div key={pokemon.id}>{pokemon.id}. {pokemon.name.english}</div>
        ))}
      </div>
    </div>
  );
}

export default App;