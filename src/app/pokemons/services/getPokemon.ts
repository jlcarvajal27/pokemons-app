import { Pokemon } from "@/app/interfaces/pokemon";
import { notFound } from "next/navigation";

export const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((res) => res.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
};
