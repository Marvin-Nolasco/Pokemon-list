import { useContext } from "react";
import { ContextPokemon } from "../Context/ContextPokemon";
import { Card } from "./Card";
import { Loader } from "./Loader";
import "./list.css";

export const List = () => {
  const { pokemons, currentPage, paginate, isLoading } =
    useContext(ContextPokemon);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="pagination">
        <span className="page-number">Page: </span>
        {[...Array(10).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`btn-paginado ${
              currentPage === number + 1 ? "active" : ""
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <div className="container">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};
