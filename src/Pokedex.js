import App from "./App"

function Pokedex( {pokemon} ){

  return (
    <div className="Pokedex">
      <ul>
        {pokemon.map(p=>{

            {p.id, p.name, p.type, p.exp}

        })}
      </ul>


    </div>
  )



}

export default Pokedex