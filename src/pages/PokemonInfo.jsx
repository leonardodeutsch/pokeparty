import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(); 
  const { id } = useParams();

  useEffect(() => {
    pokemonLoader(id);
  }, [])

  const pokemonLoader = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
          setPokemonInfo(res.data);
        })
        .catch(err => {
          console.log(err);
        })
  }
  
  if (pokemonInfo === undefined) {
    return(
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <h1>{pokemonInfo.name}</h1>
      <img src={pokemonInfo.sprites.other['official-artwork']['front_default']}/>
    </div>
  );
}

export default PokemonInfo;