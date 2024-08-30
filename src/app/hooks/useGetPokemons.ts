import { useState, useMemo, useEffect, useCallback } from "react";
import { useFetchPokemons } from "./queries/useFetchPokemons";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "./useDebounce";

const SEARCH_KEY = "search";
const PAGE_KEY = "page";

export const useGetPokemons = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get(PAGE_KEY) ?? 1)
  );
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

  const setQueryParams = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl);
  }, []);

  useEffect(() => {
    if (debounceSearchValue) {
      setQueryParams(SEARCH_KEY, debounceSearchValue);
    }
  }, [debounceSearchValue, setQueryParams]);

  useEffect(() => {
    setQueryParams(PAGE_KEY, String(currentPage));
  }, [currentPage, setQueryParams]);

  return {
    searchValue,
    setSearchValue,
    pokemons: filteredPokemons,
    handleNextPage,
    handlePreviousPage,
    currentPage,
  };
};
