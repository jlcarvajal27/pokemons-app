import { SimplePokemon } from "../../interfaces/simple-pokemon";
import { PokemonsCard } from "./PokemonsCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 px-4">
      {pokemons.map((pokemon) => (
        <PokemonsCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
