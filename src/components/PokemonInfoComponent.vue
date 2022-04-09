<template>
  <div v-if="!isLoading && tabNumber === 1" class="h-full px-10">
    <div class="flex mt-10">
      <div class="w-32">
        <ul class="museoFonts opacity-100">
          <li class="h-8">Categoria</li>
          <li class="h-8">Altura</li>
          <li class="h-8">Peso</li>
          <li class="h-8">Habilidad</li>
        </ul>
      </div>

      <div class="mb-5">
        <ul class="latoFonts detailPokemon capitalize">
          <li class="h-8">{{ pokemonsData.name }}</li>
          <li class="h-8">{{ convertMagnitude(pokemonsData.height) }} M</li>
          <li class="h-8">{{ convertMagnitude(pokemonsData.weight) }} kg</li>
          <li class="h-8">{{ pokemonsData.abilities[0].ability.name }}</li>
        </ul>
      </div>
    </div>

    <div class="mb-5">
      <p class="latoFonts font-normal">Tipo</p>

      <div class="w-80 grid grid-cols-3 gap-2">
        <div 
          v-for="(type, index) in pokemonsData.types" 
          :key="index" 
          class="capitalize mt-5 w-full bg-green-400 rounded text-center text-white"
        >
          {{ type.type.name }}
        </div>
      </div>
    </div>

    <div>
      <p class="latoFonts font-normal">Debilidad</p>

      <div class="w-80 grid grid-cols-3 gap-4">
        <div 
          v-for="(weaknesses, index) in pokemonsData?.type?.damage_relations?.double_damage_from" 
          :key="index" 
          class="capitalize mt-5 mr-2 w-full bg-purple-400 rounded text-center text-white">
          {{ weaknesses.name }}
        </div>
      </div>
    </div>
  </div>

  <div v-if="isLoading">
      loading
    <Loading />
  </div>

  <div v-if="tabNumber === 2">
    <PokemonEvolution 
      :pokemonsData="pokemonsData" 
    />
  </div>
</template>

<script>
import Loading from "./LoadingComponent.vue";
import TabSelectorDetailLayout from "../layouts/TabSelectorDetailLayout.vue";
import PokemonEvolution from "./PokemonEvolutionComponent.vue";

export default {
    props: {
        pokemonsData: { type: Object, required: true },
        isLoading: { type: Boolean, required: true },
        tabNumber : { type: Number, required: true }
    },

    methods: {
        convertMagnitude(value) {
            return Number(value) / 10;
        }
    },
    components: { Loading, TabSelectorDetailLayout, PokemonEvolution }
};
</script>

<style>
.detailPokemon {
  font: normal normal normal 16px/19px Lato;
  letter-spacing: 0px;
  color: #333c46;
}
</style>