<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  title: {
    default: "text",
  },
  li: {
    default: "#",
  },
  custom:{},
  icon1:{
    default: null
  },
  icon2:{
    default:null
  }
});
</script>

<template>
  <router-link
    :to="li"
    class="group hidden lg:flex relative w-[160px] h-10 items-center justify-center bg-primary1 rounded text-white text-sm  hover:bg-white hover:text-primary2 hover:shadow-xl transition-all duration-300 overflow-hidden"
    :class="custom"
  >
    <!-- Default State -->
    <span
      class="absolute flex items-center gap-2 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:-translate-x-6 transition-all duration-300"
    >
      <span class="text-sm">{{ title }}</span>
      <component :is="icon1" class="w-4 h-4" />
    </span>

    <!-- Hover State -->
    <span
      class="absolute flex items-center gap-2 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
    >
      Go!
      <component :is="icon2" class="w-5 h-5 animate-pulse" />
    </span>
  </router-link>
</template>
