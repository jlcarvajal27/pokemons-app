"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { PokemonsGrid } from "../components/PokemonsGrid";
import { PokemonsResponse } from "../interfaces/pokemon-response";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPage = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      const offset = (currentPage - 1) * pokemonsPage;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPage}&offset=${offset}`
      );
      const data: PokemonsResponse = await response.json();

      const fetchedPokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
      }));

      setPokemons(fetchedPokemons);
    };

    fetchPokemons();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <Pagination
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
