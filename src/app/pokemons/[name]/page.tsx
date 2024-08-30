import Navbar from "@/app/components/Navbar";
import { Pokemon } from "@/app/interfaces/pokemon";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

const getPokemon = async (name: string): Promise<Pokemon> => {
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

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  return (
    <>
      <div className="bg-second min-h-screen w-full px-2">
        <Navbar showSearch={false} />
        <div className="flex flex-col mt-8 items-center">
          <div className="w-full md:w-[600px] mx-auto">
            {/* codigo de  image Card */}
            <div className="bg-first rounded-[20px] shadow-xl shadow-blue-500/50 p-4 mb-4">
              <div className="flex flex-col items-center">
                <Image
                  src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                  width={150}
                  height={150}
                  alt={`Imagen del pokemon ${pokemon.name}`}
                  className="mb-5"
                />
                <div className="flex justify-center space-x-4">
                  <Image
                    src={pokemon.sprites.front_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                </div>
                <h1 className="text-lg md:text-xl font-bold text-white capitalize mt-4">
                  #{pokemon.id} {pokemon.name}
                </h1>
              </div>
            </div>

            {/* codigo de abilities Card */}
            <div className="bg-[#acc2ef] rounded-[20px] p-4 mb-4">
              <h2 className="text-sm md:text-md font-semibold text-second mb-2">
                Abilities
              </h2>
              <div className="flex flex-wrap">
                {pokemon.abilities.map((ability) => (
                  <p
                    key={ability.ability.name}
                    className="mr-2 capitalize text-sm md:text-base"
                  >
                    {ability.ability.name}
                  </p>
                ))}
              </div>
            </div>

            {/* codigo de types card */}
            <div className="bg-[#acc2ef] rounded-[20px] p-4 mb-4">
              <h2 className="text-sm md:text-md font-semibold text-second mb-2">
                Types
              </h2>
              <div className="flex">
                {pokemon.types.map((type) => (
                  <p
                    key={type.slot}
                    className="mr-2 capitalize text-sm md:text-base"
                  >
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>

            {/* codigo de  weight card */}
            <div className="bg-[#acc2ef] rounded-[20px] p-4 mb-4">
              <h2 className="text-sm md:text-md font-semibold text-second mb-2">
                Peso
              </h2>
              <span className="text-sm md:text-base font-medium text-gray-600">
                {pokemon.weight} Kg
              </span>
            </div>

            {/* codigo de  stats card */}
            <div className="bg-[#acc2ef] rounded-[20px] p-4 mb-4">
              <h2 className="text-sm md:text-md font-semibold text-second mb-2">
                Stats
              </h2>
              <table className="min-w-full">
                <thead className="bg-three">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-second uppercase tracking-wider">
                      Statistics
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-second uppercase tracking-wider">
                      Base value
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-second uppercase tracking-wider">
                      Effort
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon.stats.map((stat, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-second">
                        {stat.stat.name}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-second">
                        {stat.base_stat}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-second">
                        {stat.effort}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
