
import { useEffect,useState } from "react";
import {PokemonCards} from "./PokemonCards/PokemonCards"
import {Header} from "../Header/Header";
import { PokemonModal } from "../PokemonModal/PokemonModal";
interface Pokemon{
    id:number;
    name:string;
    order:string;
    sprites:any;
}

export function Pokemon(){
  const [pokemon,setPokemon]=useState<Pokemon[]>([]);

  const getPokemonList=()=>{
    
    let pokemonArray: any[]=[];
    for(let id=1;id<=151;id++){
      fetch(`https://pokeapi.co/api/v2/pokemon/`+id)
      .then(res=>res.json())
      .then(data=>{
        pokemonArray.push(data);
        setPokemon(pokemonArray);
      })
    }
    console.log(pokemonArray);
  }

  useEffect(()=>{
    getPokemonList();
  },[]); 
  
  return(
    <>
      <Header/>
      <div>
        <input type='text'
               placeholder="Digite pokemon"
               />
      </div>
      <section className="Poke-List">
      {
        pokemon.map(results=>{
          return(<PokemonCards pokemons={results}/>)
        })
      }
      </section>  
    </>
    );
}