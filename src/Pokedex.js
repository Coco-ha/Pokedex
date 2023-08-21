import React from 'react';
import Pokecard from "./Pokecard";
import './Pokedex.css';

function Pokedex({ pokemonList }) {
  return (
    <div className="Pokedex">
      {pokemonList.map(p => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience} />
      ))}
    </div>
  );
}

export default Pokedex;