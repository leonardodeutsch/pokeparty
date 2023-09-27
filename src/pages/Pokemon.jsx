import React from "react";
import { useState, useEffect } from "react";
import pokemons from "../utilities/pokemons.js";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard.jsx";

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
          <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name.english} type={pokemon.type} image={pokemon.image.thumbnail}/>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;