import Pokedex from "./Pokedex"

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites"+
"/master/sprites/pokemon/";


function Pokecard ({id,name, type, exp}){
  const image = `${BASE_URL}${id}.png`

  return (
    <div className="Pokecard">
      <p> {name} </p>
      <img src={image}> </img>
      <p> Type: {type} </p>
      <p> EXP: {exp} </p>

    </div>
  )
}

export default Pokecard