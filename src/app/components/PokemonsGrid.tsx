import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonsCard } from "./PokemonsCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap mt-6">
      {pokemons.map((pokemon) => (
        <PokemonsCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
