import { Pokemon } from "@/app/interfaces/pokemon";
import Image from "next/image";
import React from "react";

interface Props {
  pokemon: Pokemon;
}

const PokemonImages = ({ pokemon }: Props) => {
  return (
    <div className="md:w-1/3">
      <div className=" rounded-[20px] p-5">
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
        </div>
      </div>
    </div>
  );
};

export default PokemonImages;
