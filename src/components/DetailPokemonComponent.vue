<template>
  <div
    v-if="pokemonsData"
    :class="getColorHeader(pokemonsData?.types[0].type.name)"
  >
    <div class="lg:h-60 h-44">
      <div class="h-2/3 sm:h-2/6">
        <div class="h-full p-4 relative">
          <div class="flex justify-between text-white font-bold">
            <div class="cursor-pointer" @click="goToHome()">
              <svg
                class="h-6 w-6"
                viewBox="0 0 18 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2L2 12.5L16 23.5"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div class="flex">
              <div @click="copyClipboardPokemon(pokemonsData)" class="mx-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>

              <div
                class="cursor-pointer"
                @click="addPokemonFavorite(pokemonsData)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="flex w-full justify-between mt-5">
            <div class="w-3/4">
              <div>
                <p class="title text-4xl text-white font-semibold capitalize">
                  {{ pokemonsData.name }}
                </p>
              </div>

              <div>
                <span class="latoFonts text-white text-base tracking-normal">
                  Este Pokemon nace con una semilla en el lomo, que brota con el
                  paso del tiempo
                </span>
              </div>
            </div>

            <div class="p-3">
              <p class="latoFonts text-white text-base">
                N. °{{ pokemonsData.id }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="
            px-1
            relative
            flex
            mt-24
            lg:mt-36
            sm:mt-36
            md:mt-36
            justify-center
            items-end
            h-full
          "
        >
          <div class="w-96 headerBackgroud bg-right">
            <img
              class="mx-auto"
              style="width: 197px"
              :src="pokemonsData.sprites?.front_default"
              :alt="pokemonsData.name"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        rounded-t-3xl
        h-full
        bg-white
        p-2
        mt-20
        sm:mt-0
        md:mt-0
        lg:mt-0
        xl:mt-0
        py-20
      "
    >
      <div class="px-10">
        <TabSelectorDetail 
          :tabNumber="tab" 
          @updateTab="changeTab" 
        />
      </div>

      <PokemonInfo
        :tabNumber="tab"
        :isLoading="isLoading"
        :pokemonsData="pokemonsData"
      />
    </div>
  </div>
</template>

<script>
import { getPokemonById, getPokemonsDetail } from "../services/FetchDataApi";
import PokemonInfo from "./PokemonInfoComponent.vue";
import TabSelectorDetail from "../layouts/TabSelectorDetailLayout.vue";
import { changeColorByType } from "../utils/utils";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      pokemonsData: null,
      isLoading: true,
      tab: 1,
    };
  },
  computed: {
    getQueryIdPokemon() {
      return this.$route.params.id;
    },
  },
  async created() {
    await this.getPokemonInfoById();
  },
  methods: {
    ...mapActions("forms", ["setPokemonData"]),

    goToHome() {
      this.$router.push("/");
    },

    async changeTab(data) {
      this.tab = data;
    },

    copyClipboardPokemon(data) {
      let pokemonExport = `name: ${data.name}, height: ${data.height}, experience: ${data.base_experience}`
      navigator.clipboard.writeText(pokemonExport)
        .then(() => alert("Pokemon info is Copy to Clipboard"))
    },

    async getPokemonInfoById() {
      let url_pokemon_detail = `https://pokeapi.co/api/v2/type/${this.getQueryIdPokemon}/`
      this.isLoading = true;
      let { pokemonsObject, isError } = await getPokemonById(
        this.getQueryIdPokemon
      );

      this.isLoading = false;
      if (!isError) {
        this.pokemonsData = pokemonsObject;

        let pokemonType = await getPokemonsDetail(url_pokemon_detail)
        if(pokemonType){
          this.pokemonsData.type = pokemonType
        }
      }
    },

    getColorHeader(type) {
      return changeColorByType(type);
    },

    addPokemonFavorite(data) {
      this.$router.push("/favorites");
      this.setPokemonData(data);
    },
  },
  components: { PokemonInfo, TabSelectorDetail },
};
</script>

<style>
.headerBackgroud {
  background-image: url("../assets/pokeball_icon_white.svg");
  background-repeat: no-repeat;
  background-size: 200px;
}
</style>