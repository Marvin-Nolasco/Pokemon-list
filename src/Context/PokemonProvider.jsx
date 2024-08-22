import { useEffect, useState } from "react";
import { ContextPokemon } from "./ContextPokemon";

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  //Obtener los primeros 150 pokemos a la api
  const getPokemons = async (limit = 150, offset = 0) => {
    const baseApiUrl = "https://pokeapi.co/api/v2";
    const response = await fetch(
      `${baseApiUrl}/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });
    const results = await Promise.all(promises);
    setPokemons(results);
    setIsLoading(false);
  };

  const getPokemonsById = async (id) => {
    const baseApiUrl = "https://pokeapi.co/api/v2";
    const response = await fetch(`${baseApiUrl}/pokemon/${id}`);
    const data = await response.json();
    return data;
  };
  //paginacion
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setOffset((pageNumber - 1) * itemsPerPage);
  };
  useEffect(() => {
    getPokemons(itemsPerPage, offset);
  }, [offset]);

  return (
    <ContextPokemon.Provider
      value={{
        pokemons,
        getPokemonsById,
        currentPage,
        paginate,
        isLoading,
      }}
    >
      {children}
    </ContextPokemon.Provider>
  );
};
export default PokemonProvider;
