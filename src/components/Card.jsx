import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="pokemonCard">
      <div>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`pokemon ${pokemon.name}`}
          className="avatar"
        />
      </div>
      <div className="card-info">
        <span className="pokemon-id">n° {pokemon.id}</span>
        <h3 className="pokemon-name">{pokemon.name}</h3>
      </div>
      <div className="card-types">
        {pokemon.types.map((type) => (
          <span key={type.type.name} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </Link>
  );
};
