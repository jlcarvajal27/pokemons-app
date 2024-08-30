import { Ability } from "@/app/interfaces/pokemon";
import React from "react";

interface Props {
  abilities: Ability[];
}

const PokemonAbilities = ({ abilities }: Props) => {
  return (
    <div className="bg-three rounded-[10px] p-4 md:col-span-2">
      <h2 className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2">
        Abilities
      </h2>
      <div className="flex flex-col">
        {abilities.map(({ ability }) => (
          <p
            key={ability.name}
            className="pl-2  capitalize text-sm md:text-base text-white"
          >
            <span className="block">- {ability.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilities;
