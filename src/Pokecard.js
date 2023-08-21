import React from 'react';
import './Pokecard.css';

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/";

function Pokecard({ id, name, type, exp }) {
  const image = `${BASE_URL}${id}.png`;
  //TODO: imageUrl

  return (
    <div className="Pokecard">
      <div className="PokecardName"> {name} </div>
      <img src={image} alt="" />
      <div>Type: {type} </div>
      <div>EXP: {exp} </div>
    </div>
  );
}

export default Pokecard;