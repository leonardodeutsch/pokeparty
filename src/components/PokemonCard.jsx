import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({id, name, type, image}) => {

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon-card">
        <div className="id-name">
          <div className="id">{id}</div>
          <div className="name">{name}</div>
        </div>

        <div className="icon-type-container">
          {type.map((t, i=0) => (
            <div className="icon-type" key={i+1}>{t}</div>
          ))}
        </div>

        <div className="card-image">
          
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;