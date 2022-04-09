<template>
  <div>
    <div class="px-4 py-4 cursor-pointer" @click="goToHome()">
      <svg
        class="h-6 w-6"
        viewBox="0 0 18 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2L2 12.5L16 23.5"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <div class="py-10">
      <div class="mb-8 w-full h-full flex items-end px-4">
        <p class="title text-4xl font-bold capitalize">favorites</p>
      </div>
      
      <PokemonCards v-if="pokemons.length > 0" :isFavorite="true" :pokemonsFavorite="pokemons"/>
      <p v-if="pokemons.length < 1" class="px-2">No hay pokemon favoritos</p>
    </div>
  </div>
</template>

<script>
import PokemonCards from "../components/PokemonCardsComponents.vue";

export default {
  computed: {
    pokemons() {
      return this.$store.state.forms.pokemon_data;
    }
  },

  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },

  components: { PokemonCards },
};
</script>

<style>
</style>