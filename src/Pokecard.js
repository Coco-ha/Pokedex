import React from 'react';
import './Pokecard.css';

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/";

function Pokecard({ id, name, type, exp }) {
  const imageUrl = `${BASE_URL}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="PokecardName"> {name} </div>
      <img src={imageUrl} alt="" />
      <div>Type: {type} </div>
      <div>EXP: {exp} </div>
    </div>
  );
}

export default Pokecard;