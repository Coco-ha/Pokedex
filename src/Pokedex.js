import React from 'react';
import Pokecard from "./Pokecard";
import './Pokedex.css';

function Pokedex({ pokemonList, expTotal, isWinner, }) {
  const winMessage = isWinner ? `THIS HAND WINS! Total Experience: ${expTotal}` : "";
  return (
    <div className="Pokedex">
      {pokemonList.map(p => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience} />
      ))}

      <p> {winMessage} </p>

    </div>
  );
}

export default Pokedex;