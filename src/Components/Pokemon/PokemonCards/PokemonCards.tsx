import {PokemonModal} from '../../PokemonModal/PokemonModal';
import {useState} from 'react';

interface PokemonUrl{
    pokemons:{
        id:number;
        name:string;
        order:string;
        sprites:any;
    }
}
interface PokemonModalProps{
    onOpenPokemon:()=>void;
}

export function PokemonCards(props:PokemonUrl,{onOpenPokemon}:PokemonModalProps){
    
    const id=props.pokemons.id;
    const name=props.pokemons.name;
    const order=props.pokemons.order;
    const sprite=props.pokemons.sprites.front_default;

    const [pokemonCliked,setPokemonClicked]=useState(false);

    function handleOpenPokemonModal(){
        setPokemonClicked(true);
    }

    function handleClosePokemonModal(){
        setPokemonClicked(false);
    }

    return(
        <>
            <h1>{name}</h1>
            <li key={id}>{order}</li>
            <img src={sprite} alt={name}></img>
            <button type='button' onClick={handleOpenPokemonModal}>More</button>
            <PokemonModal
                isOpen={pokemonCliked}
                onRequestClose={handleClosePokemonModal}
            />
        </>
    )
}