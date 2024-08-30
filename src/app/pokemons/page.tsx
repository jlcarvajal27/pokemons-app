"use client";
import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { PokemonsGrid } from "./components/PokemonsGrid";
import { useGetPokemons } from "../hooks/useGetPokemons";

export default function PokemonsPage() {
  const {
    handleNextPage,
    handlePreviousPage,
    pokemons,
    searchValue,
    setSearchValue,
  } = useGetPokemons();
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
      <PokemonsGrid pokemons={pokemons} />
      <Pagination
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}
