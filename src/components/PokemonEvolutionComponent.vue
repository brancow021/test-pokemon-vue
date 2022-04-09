<template>
  <div v-if="pokemonEvolution && !isLoading"
>
    <div
      class="
        h-92
        lg:h-80
        w-full
        mt-10
        evolutionBox
        flex
        justify-center
        items-center
        flex-col
      "
    >
      <img
        width="257"
        height="257"
        :src="pokemonEvolution?.sprites?.front_default"
        alt=""
      />
    </div>

    <div class="justify-center flex flex-col items-center">
      <div class="flex justify-center items-center">
        <div class="mx-3">
          <p style="color: #333c46" class="capitalize museoFonts text-3xl font-bold">
            {{ pokemonEvolution.name }}
          </p>
        </div>
        <div>
          <p class="latoFonts text-2xl">N.°00{{ pokemonEvolution.id }}</p>
        </div>
      </div>

      <div class="mt-4 w-80 grid grid-cols-3 gap-4">
        <div
          v-for="(type, index) in pokemonEvolution.types"
          :key="index"
          class="mr-2 w-full m-auto bg-green-300 rounded text-center text-white"
        >
          {{ type.type.name }}
        </div>
      </div>
    </div>
  </div>

  
  <div v-if="isLoading">
    <Loading />
  </div>
</template>

<script>
import {
  getPokemonById,
  getSpeciesAndChainEvolution,
} from "../services/FetchDataApi";
import Loading from "./LoadingComponent.vue";

export default {
    props: {
        pokemonsData: { type: Object, required: true },
    },
    data() {
        return {
            pokemonEvolution: {},
            isLoading: false,
        };
    },
    created() {
        this.getPokemonEvolution();
    },
    methods: {
        async getPokemonEvolution() {
            this.isLoading = true;
            let URL = this.pokemonsData.species.url;
            let { pokemonsObject, isError } = await getSpeciesAndChainEvolution(URL);
            this.isLoading = false;
            let pokemonEvolution = await getPokemonById(pokemonsObject.chain.evolves_to[0].species.name);
            if (!isError) {
                this.pokemonEvolution = pokemonEvolution.pokemonsObject;
            }
        },
    },
    components: { Loading }
};
</script>

<style>
.evolutionBox {
  background-image: url("../assets/pokeball_icon_136305.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>