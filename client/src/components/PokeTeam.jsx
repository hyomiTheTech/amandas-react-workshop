//TODO
/*
<div id="pokeTeam">
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
</div>
*/
import React from "react";
import PokeTeamSlot from "./PokeTeamSlot.jsx";

const PokeTeam = props => {
  return (
    <div id="pokeTeam">
      {props.pokeTeam.map((pokemon, index) => (
        <PokeTeamSlot
          pokemon={pokemon}
          // key is for the react, so you cant pass the value down to the children.
          key={index}
          index={index}
          addPokemon={props.addPokemon}
        />
      ))}
    </div>
  );
};

export default PokeTeam;
