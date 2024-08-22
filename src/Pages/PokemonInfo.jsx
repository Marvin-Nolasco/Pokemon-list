import React, { useContext, useEffect, useState } from "react";
import { ContextPokemon } from "../Context/ContextPokemon";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import "../main.css";
const PokemonInfo = () => {
  const { getPokemonsById } = useContext(ContextPokemon);

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  const fechPokemon = async (id) => {
    const data = await getPokemonsById(id);
    setPokemon(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fechPokemon(id);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="pokemonInfoContainer">
            <div className="card-types">
              {pokemon.types.map((type) => (
                <span key={type.type.name} className={`type ${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="basic-info">
              <div className="basic-info-text">
                <span className="pokemon-id-info">n° {pokemon.id}</span>
                <h3 className="pokemon-name-info">
                  ¡¡Hi!!, iam {pokemon.name}
                </h3>
              </div>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`pokemon ${pokemon.name}`}
                className="img-pokemon"
              />
            </div>
            <div className="statistics-info">
              <h3 className="statistics">These are my statistics</h3>
              <div className="stats">
                <div className="stats-item">
                  <span className="statistics-name">Hp</span>
                  <div className="bar-between"></div>
                  <span className="stats-number">
                    {pokemon.stats[0].base_stat}
                  </span>
                </div>

                <div className="stats-item">
                  <span className="statistics-name">Attack</span>
                  <div className="bar-between"></div>
                  <span className="stats-number">
                    {pokemon.stats[1].base_stat}
                  </span>
                </div>

                <div className="stats-item">
                  <span className="statistics-name">Defense</span>
                  <div className="bar-between"></div>
                  <span className="stats-number">
                    {pokemon.stats[2].base_stat}
                  </span>
                </div>

                <div className="stats-item">
                  <span className="statistics-name">Special Attack</span>
                  <div className="bar-between"></div>
                  <span className="stats-number">
                    {pokemon.stats[3].base_stat}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonInfo;
