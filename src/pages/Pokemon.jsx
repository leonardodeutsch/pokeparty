import React from "react";
import { useState, useEffect } from "react";
import pokemons from "../utilities/pokemons.js";
import { Link } from "react-router-dom";

const Pokemon = () => {
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
      <input type="text" className="search-pokemon" onChange={searchPokemon} placeholder="Search..."/>
      <div className="pokemon-list">
        {filteredPokemon.map(pokemon => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <div >{pokemon.id}. {pokemon.name.english}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;