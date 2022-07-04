
import { useEffect,useState } from "react";
import {PokemonCards} from "./PokemonCards/PokemonCards"
import {Header} from "../Header/Header";
import { PokemonModal } from "../PokemonModal/PokemonModal";

export interface PokemonData{
    id:number;
    name:string;
    order:string;
    sprites:any;
}

interface PokemonModalProps{
  onOpenPokemon:()=>void;
}

function makeRequest(id:number){
  return new Promise((resolve,reject)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/`+id)
      .then(res=>res.json())
      .then(data=>{
        console.log(`https://pokeapi.co/api/v2/pokemon/`+id);
        resolve(data);
      })
  })
}

export function Pokemon(){
  const [pokemon,setPokemon]=useState<PokemonData[]>([]);
  const [currentPokemon,setCurrentPokemon]=useState<PokemonData>({} as PokemonData);

  const  getPokemonList=()=>{
    let request:any []=[];
   
    for(let id=1;id<=151;id++){
      request.push(makeRequest(id));
    }
    Promise.all(request)
    .then((values)=>{
      setPokemon(values);
    }) 

    
  }

  useEffect(()=>{
    getPokemonList();
  },[]); 
  
  const [pokemonCliked,setPokemonClicked]=useState(false);

    function handleOpenPokemonModal(pokemonData:PokemonData){
        setPokemonClicked(true);
        setCurrentPokemon(pokemonData)
    }

    function handleClosePokemonModal(){
        setPokemonClicked(false);
    }

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
          return(<PokemonCards pokemonData={results} handleOpenPokemonModal={handleOpenPokemonModal}/>)
        })
      }
      <PokemonModal
                isOpen={pokemonCliked}
                onRequestClose={handleClosePokemonModal}
                pokemonData={currentPokemon}
            />
      </section>  
    </>
    );
}