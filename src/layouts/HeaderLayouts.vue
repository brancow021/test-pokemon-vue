<template>
  <div class="relative overflow-hidden">
    <div class="w-full h-1/5 flex justify-end">
      <div class="w-full flex justify-end absolute flex-wrap -top-20 left-40">
        <img
          class="w-80 h-80 mx-16"
          v-bind:src="pinturePokeBall"
          alt="pokeball"
        />
      </div>

      <div class="w-full h-44 flex justify-end items-center">
        <div class="mb-8 w-full h-full flex items-end">
					<p class="title text-4xl font-bold">Pokedex</p>
				</div>
				
				<div @click="goToFavoriteView()" class="cursor-pointer mx-12 mb-5 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pinturePokeBall from "../assets/pokeball_icon_136305.svg";

export default {
  data() {
    return {
      pinturePokeBall,
    };
  },

  methods: {
    goToFavoriteView(){
      this.$router.push('/favorites')
    }
  }
};
</script>

<style scoped>

</style>
