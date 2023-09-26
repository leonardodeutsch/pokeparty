import React from "react";
import { useState, useEffect } from "react";
import pokemons from "./utilities/pokemons.js";

const App = () => {
  const [pokemonSearched, setPokemonSearched] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState(pokemons);

  useEffect(() => {
    setFilteredPokemon(pokemons.filter(pokemon => pokemon.name.english.toLowerCase().includes(pokemonSearched.toLowerCase())));
  }, [pokemonSearched]);

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
        {filteredPokemon.map(pokemon => (
          <div key={pokemon.id}>{pokemon.id}. {pokemon.name.english}</div>
        ))}
      </div>
    </div>
  );
}

export default App;