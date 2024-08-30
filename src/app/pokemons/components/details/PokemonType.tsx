import { Type } from "@/app/interfaces/pokemon";
import React from "react";

interface Props {
  types: Type[];
}

const PokemonType = ({ types }: Props) => {
  return (
    <div className="bg-three rounded-[10px] p-4">
      <h2 className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2">
        Types
      </h2>
      <div className="flex flex-col">
        {types.map((type) => (
          <p
            key={type.slot}
            className="pl-2 capitalize text-sm md:text-base text-white"
          >
            - {type.type.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokemonType;
