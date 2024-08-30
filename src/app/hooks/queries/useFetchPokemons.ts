import { PokemonsResponse } from "@/app/interfaces/pokemon-response";
import { SimplePokemon } from "@/app/interfaces/simple-pokemon";
import { useEffect, useState } from "react";

interface Props {
  currentPage: number;
  limit?: number;
}

export const useFetchPokemons = ({ currentPage, limit = 20 }: Props) => {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const offset = (currentPage - 1) * limit;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
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
  return { pokemons };
};
