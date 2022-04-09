<template>
  <div>
    <ul class="flex w-32">
      <li
        @click="changeTab(1)"
        :class="tabNumber === 1 
        ? 'mr-10 cursor-pointer w-full h-12 border-b-2 border-blue-700 latoFonts text-base' 
        : 'mr-10 cursor-pointer w-full h-12 border-b-2 latoFonts text-base'"
      >
        Pokemon
      </li>
      <li
        @click="changeTab(2)"
        :class="tabNumber === 2 
        ? 'cursor-pointer w-full h-12 border-b-2 border-blue-700 latoFonts text-base' 
        : 'cursor-pointer w-full h-12 border-b-2 latoFonts text-base'"
      >
        Evolucion
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabNumber: { type: Number, required: true },
  },

  methods:{
    changeTab(number){
      this.$emit('updateTab', number)
    },
  }
};
</script>

<style>
</style>