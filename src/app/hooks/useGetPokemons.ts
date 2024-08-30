import { useState, useMemo } from "react";
import { useFetchPokemons } from "./queries/useFetchPokemons";

export const useGetPokemons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { pokemons } = useFetchPokemons({ currentPage });

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const normalizeName = pokemon.name.toLowerCase();
      const normalizeSearchValue = searchValue.toLowerCase().trim();
      return normalizeName.includes(normalizeSearchValue);
    });
  }, [searchValue, pokemons]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    searchValue,
    setSearchValue,
    pokemons: filteredPokemons,
    handleNextPage,
    handlePreviousPage,
  };
};
