import {PokemonModal} from '../../PokemonModal/PokemonModal';
import {useState} from 'react';
import {PokemonData} from '../Pokemon';


interface PokemonCardsProps{
    onOpenPokemon:()=>void;
    pokemonData:PokemonData;
    handleOpenPokemonModal:()=>void;
}

export function PokemonCards({ pokemonData , onOpenPokemon,handleOpenPokemonModal }:PokemonCardsProps){
    
    const id=pokemonData.id;
    const name=pokemonData.name;
    const order=pokemonData.order;
    const sprite=pokemonData.sprites.front_default;
   
    return(
        <>
            <h1>{name}</h1>
            <li key={id}>{order}</li>
            <img src={sprite} alt={name}></img>
            <button type='button' onClick={handleOpenPokemonModal}>More</button>
        </>
    )
}