export const searchPokemon= async(pokemon:number)=>{
    try{
        let url=`https://pokeapi.co/api/v2/pokemon`;
        const response = fetch(url)
        return (await response).json();
    } catch(error){
        console.log("error:",error);
    }
}

export const allPokemon=async()=>{
    try{
        let url=`https://pokeapi.co/api/v2/pokemon?limit=150`;
        const response = fetch(url)
        return (await response).json();
    } catch(error) {
        console.log('Error:',error);
    }
}