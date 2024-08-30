"use client";

import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../../interfaces/simple-pokemon";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonsCard = ({ pokemon }: Props) => {
  const { name, id } = pokemon;

  return (
    <div className="transition ease-in-out delay-150 hover:scale-110 duration-300">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-first">
          <div className="w-[190px] h-[190px] relative">
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="pt-2 text-lg font-bold text-gray-50 capitalize">
            {name}
          </p>

          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/pokemons/${name}`}
            >
              Mas Detalles..
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
