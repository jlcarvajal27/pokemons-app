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
        <div className="flex flex-col md:flex-row mt-8 justify-center items-center">
          <div className="flex flex-col md:flex-row items-center rounded-[20px] w-[90%] md:w-[600px] mx-auto bg-first bg-clip-border shadow-xl shadow-blue-500/50 p-3">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />

              <div className="flex flex-col justify-center items-center rounded-2xl bg-clip-border px-3 py-4">
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
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-4 mt-4 md:mt-0">
              <h1 className="text-lg md:text-xl font-bold text-white capitalize">
                #{pokemon.id} {pokemon.name}
              </h1>
              <div className="rounded-2xl bg-[#acc2ef] bg-clip-border px-3 py-4">
                <p className="text-sm md:text-md font-semibold text-second">
                  Abilities
                </p>
                <div className="flex flex-wrap">
                  {pokemon.abilities.map((ability: any) => (
                    <p
                      key={ability.name}
                      className="mr-2 capitalize text-sm md:text-base"
                    >
                      {ability.ability.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-[#acc2ef] bg-clip-border px-3 py-4 drop-shadow-lg">
                <p className="text-sm md:text-md font-semibold text-second">
                  Types
                </p>
                <div className="text-sm md:text-base font-medium text-gray-600 flex">
                  {pokemon.types.map((type) => (
                    <p key={type.slot} className="mr-2 capitalize">
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-[#acc2ef] bg-clip-border px-3 py-4 drop-shadow-lg">
                <p className="text-sm md:text-md font-semibold text-second">
                  Peso
                </p>
                <span className="text-sm md:text-base font-medium text-gray-600 flex">
                  {pokemon.weight}- Kg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
