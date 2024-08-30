"use client";
import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { PokemonsGrid } from "./components/PokemonsGrid";
import { useFetchPokemons } from "../hooks/queries/useFetchPokemons";

export default function PokemonsPage() {
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
  return (
    <div className="flex flex-col bg-second">
      <Navbar
        showSearch
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
      <Pagination
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
      <PokemonsGrid pokemons={filteredPokemons} />
      <Pagination
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}
