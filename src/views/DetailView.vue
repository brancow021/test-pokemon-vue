<template>
  <div class="h-full">
    <DetailPokemon />
  </div>
</template>

<script>
import PokemonInfo from '../components/PokemonInfoComponent.vue'
import DetailPokemon from '../components/DetailPokemonComponent.vue'


export default {
  components: {
    DetailPokemon,
    PokemonInfo
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
