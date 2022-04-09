import { POKEMON_API_URL } from "../../env";

// GET ALL POKEMONS
export const getPokemons = async (url = "") => {
  let isError = false;
  let pokemonsArr = []

  const URL_API_POKEMONS = url.length < 1 ? `${POKEMON_API_URL}/pokemon/?offset=1&limit=100` : url

  try {
    let response = await fetch(URL_API_POKEMONS)
    const pokemons = await response.json();

    if(response.status === 200) {
      pokemonsArr = pokemons.results

      let pokemonDataUnresolved = pokemonsArr.map(async (pokemon) => {
        let typesPokemon =  await getPokemonsDetail(pokemon.url);
        pokemon.types = typesPokemon.types
        pokemon.id = typesPokemon.id
        pokemon.sprites = typesPokemon.sprites
      })

      await Promise.all(pokemonDataUnresolved);
    }

  } catch (err) { isError = true }

  return {
    pokemonsArr,
    isError
  }
}

// GET POKEMONS DATA DETAIL
export const getPokemonsDetail = async (URL) => {
  let typesPokemon = [];

  try {
    let response = await fetch(URL)
    const pokemonsInfo = await response.json();

    if(response.status === 200) {
      typesPokemon = pokemonsInfo
    }

  } catch (err) { console.log("Error", err); }


  return typesPokemon
}


//GET POKEMON BY ID
export const getPokemonById = async (id) => {
  const GET_POKEMON_BY_ID = `${POKEMON_API_URL}/pokemon/${id}`
  
  let pokemonsObject = {}
  let isError = false;

  try {
    let response = await fetch(GET_POKEMON_BY_ID);
    const pokemonsInfo = await response.json();

    if(response.status === 200){
      pokemonsObject = pokemonsInfo
    } else console.log("ERROR");

  } catch (error) { 
    isError = true 
  }

  return {
    pokemonsObject,
    isError
  }
}


// GET CHAIN EVOLUTION
export const getSpeciesAndChainEvolution = async (url) => {
  let pokemonsObject = {}
  let isError = false;

  try {
    let response = await fetch(url);
    const pokemonsInfo = await response.json();

    if(response.status === 200){
      let chainRes = await fetch(pokemonsInfo.evolution_chain.url)
      let chain = await chainRes.json()
      
      if(!isError){
        pokemonsObject = chain
      }

    } else console.log("ERROR");

  } catch (error) { 
    isError = true 
  }

  return {
    pokemonsObject,
    isError
  }
}

