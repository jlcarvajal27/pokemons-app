"use client";
import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { PokemonsGrid } from "./components/PokemonsGrid";
import { useGetPokemons } from "../hooks/useGetPokemons";

export default function PokemonsPage() {
  const {
    pokemons,
    searchValue,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    setSearchValue,
  } = useGetPokemons();

  const paginationElement = (
    <Pagination
      onNextPage={handleNextPage}
      onPreviousPage={handlePreviousPage}
      currentPage={currentPage}
    />
  );
  return (
    <div className="flex flex-col bg-second">
      <Navbar
        showSearch
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
      {paginationElement}
      <PokemonsGrid pokemons={pokemons} />
      {paginationElement}
    </div>
  );
}
