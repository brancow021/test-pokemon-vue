<template>
  <div>
    <nav class="px-5">
      <HeaderLayouts />
    </nav>
    <main>
      <PokemonCards />
    </main>
  </div>
</template>


<script>
import PokemonCards from "../components/PokemonCardsComponents.vue"
import HeaderLayouts from "../layouts/HeaderLayouts.vue"


export default {
  components: {
    HeaderLayouts,
    PokemonCards
  }  
}

</script>