import Navbar from "@/app/components/Navbar";
import { getPokemon } from "../services/getPokemon";
import PokemonType from "../components/details/PokemonType";
import PokemonAbilities from "../components/details/PokemonAbilities";
import PokemonImages from "../components/details/PokemonImages";
import PokemonMeasures from "../components/details/PokemonMeasures";

interface Props {
  params: { name: string };
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  return (
    <div className="bg-second min-h-screen">
      <Navbar showSearch={false} />
      <div className="mt-6 max-w-3xl mx-auto px-4 pb-2">
        <h1 className="text-lg md:text-xl font-bold text-white capitalize mt-4 mb-6">
          #{pokemon.id} {pokemon.name}
        </h1>

        <div className="flex flex-col md:flex-row">
          <PokemonImages pokemon={pokemon} />
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <PokemonAbilities abilities={pokemon.abilities} />
            <PokemonType types={pokemon.types} />
            <PokemonMeasures height={pokemon.weight} weight={pokemon.height} />
          </div>
        </div>
      </div>
    </div>
  );
}
