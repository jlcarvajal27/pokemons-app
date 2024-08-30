import { useState, useMemo } from "react";
import { useFetchPokemons } from "./queries/useFetchPokemons";
import { useSearchParams } from "next/navigation";
import { useDebounce } from "./useDebounce";

const SEARCH_KEY = "search";

export const useGetPokemons = () => {
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(
    searchParams.get(SEARCH_KEY) ?? ""
  );
  const { pokemons } = useFetchPokemons({ currentPage });
  const debounceSearchValue = useDebounce(searchValue);

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const normalizeName = pokemon.name.toLowerCase();
      const normalizeSearchValue = debounceSearchValue.toLowerCase().trim();
      return normalizeName.includes(normalizeSearchValue);
    });
  }, [debounceSearchValue, pokemons]);

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
