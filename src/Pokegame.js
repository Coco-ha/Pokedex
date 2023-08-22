import React from 'react';
import Pokedex from './Pokedex';
// import { pokemonList } from './App';

const pokemonList = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function expCount(deck) {
  return deck.reduce((total, pokemon) =>
    total += pokemon.base_experience, 0
  );
  // return totalExp;

}

function Pokegame({ pokemon = pokemonList }) {
  const shuffledArr = pokemon.sort(() => Math.random() - 0.5);


  let deck1 = shuffledArr.slice(0, 4);
  let deck2 = shuffledArr.slice(4);
  // console.log("DECKS HERE>>>", deck1,deck2)

  let deck1Xp = expCount(deck1);
  let deck2Xp = expCount(deck2);
  // console.log("EXP HERE>>>>>", deck1Xp,deck2Xp)
  // let winner = deck1Xp > deck2Xp ? deck1 : deck2


  return (
    <div>
      <Pokedex pokemonList={deck1} expTotal={deck1Xp} isWinner={deck1Xp > deck2Xp} />
      <Pokedex pokemonList={deck2} expTotal={deck2Xp} isWinner={deck2Xp > deck1Xp} />
    </div>
  );
}

export default Pokegame;
