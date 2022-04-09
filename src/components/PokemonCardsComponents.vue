<template>
  <div v-if="isLoading === false" class="w-full">
    <div class="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 gap-4 mx-3">
      <div v-for="(pokemon, index)  in pokemons" :key="index" :class="styleCardTypePokemon(pokemon.types[0].type.name)">
        <div @click="viewDetail(pokemon.id)" class="w-full h-full cardBody flex cursor-pointer">
          <div class="w-11/12 p-2">
            <div>
              <p class="text-white text-base mb-1 capitalize">{{ pokemon.name }}</p>
            </div>

            <div v-for="(type, index) in pokemon.types" :key="index">
              <div class="skillBox mb-2">
                <p class="skillText capitalize">{{type.type.name}}</p>
              </div>
            </div>
          </div>

          <div class="w-full mr-2 py-2">
            <div>
              <p class="skillText text text-xs text-right">N.°{{ pokemon.id }}</p>
            </div>

            <div class="w-full">
              <img :src="pokemon?.sprites?.front_default">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isLoading === true">
    <Loading />
  </div>
</template>

<script>
import { getPokemons } from '../services/FetchDataApi'
import Loading from './LoadingComponent.vue'

export default {
  components: {
    Loading
  },

  props: {
    pokemonsFavorite: { required: false },
    isFavorite: { required: false }
  },

  data(){
    return{
      pokemons: [],
      isLoading: false
    }
  },

  created(){
    if(this.isFavorite){
      this.pokemons = this.pokemonsFavorite  
    } else {
      this.getPokemonList();
    }

  },

  methods: {
    async getPokemonList(){
      this.isLoading = true
      let { isError, pokemonsArr } = await getPokemons();
      this.isLoading = false
      if(!isError){
        this.pokemons = pokemonsArr
      }
    },

    styleCardTypePokemon(typePokemon = "plant"){

      switch (typePokemon) {
        case "fire":
          return "cardFire rounded-lg"
          
        case "water":
          return "cardWater rounded-lg"

        case "grass":
          return "cardPlant rounded-lg"

        case "bug":
          return "cardBug rounded-lg"
      
        default:
          return "cardNormal rounded-lg"
      }
    },

    viewDetail(id = 1){
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style>
  img{
    width: 300px;
    height: 250px;
    object-fit: cover;
    object-position: center center;
  }
  
</style>