import React from "react";
import { useParams } from "react-router-dom";

const PokemonInfo = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>pokemon { id }</h1>
    </div>
  );
}

export default PokemonInfo;