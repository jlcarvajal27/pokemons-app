import React from "react";
import { GiWeight } from "react-icons/gi";
import { TfiRuler } from "react-icons/tfi";

interface Props {
  weight: number;
  height: number;
}

const PokemonMeasures = ({ height, weight }: Props) => {
  return (
    <div className="bg-three rounded-[10px] p-4 flex items-center gap-4 justify-center">
      <div className="w-fit">
        <GiWeight className="text-3xl mx-auto" />
        <span className="text-sm md:text-base font-medium text-white">
          {weight} Kg
        </span>
      </div>

      <div className="w-fit">
        <TfiRuler className="text-3xl mx-auto" />
        <span className="text-sm md:text-base font-medium text-white">
          {height} m
        </span>
      </div>
    </div>
  );
};

export default PokemonMeasures;
