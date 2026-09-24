<script setup>
import { ArrowRight } from "lucide-vue-next";

defineProps({
  title: String,
  translation: String,
  description: String,
  icon: String,
  info: String,
  link: String,
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- IMPORTANT: flex + h-full -->
  <div class="flex flex-col h-full text-center md:p-3">
    <!-- Icon -->
    <div class="flex justify-center mb-3">
      <img :src="icon" alt="" class="size-16" />
    </div>

    <!-- Title -->
    <h3 class="text-sm lg:text-lg font-bold mb-3 text-primary2 ">
      {{ title }}
    </h3>

    <p class="text-lg lg:text-xl font-semibold mb-2 text-primary1 italic" v-if="translation">{{ translation }}</p>

    <!-- Description -->
    <p class="text-[15px] text-gray-600 mb-4" style="line-height: 2rem">
      {{ description }}
    </p>

    <!-- BUTTON STICKS TO BOTTOM -->
    <a
      v-if="showButton && link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="group mt-auto inline-flex items-center justify-center gap-2 text-primary1 hover:text-primary2 transition-all duration-300 px-4 py-2 rounded-md text-[14x] font-bold"
    >
      {{ info }}
      <ArrowRight
        class="size-5 group-hover:translate-x-3 transition-transform"
      />
    </a>
  </div>
</template>
