<script setup>
import { ArrowRight } from "lucide-vue-next";
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  description: String,
  image: String,
  cardClass: String,
  titleClass: String,
  buttonClass: String,
  descriptionClass: String,
  info: String,
  link: String,
  showButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <!-- Card wrapper MUST be flex-col -->
  <div class="flex flex-col h-full group">
    <!-- Image (fixed height) -->
    <div class="relative overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        :class="cardClass"
      />
    </div>

    <!-- Content (fills remaining space) -->
    <div class="p-4 flex flex-col flex-1">
      <h3 class="font-bold text-prind mb-3" :class="titleClass">
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-gray-600 text-sm text-justify hyphens-auto leading-relaxed max-w-3xl"
        :class="descriptionClass"
        style="line-height: 2rem"
      >
        {{ description }}
      </p>

      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-auto inline-flex items-center justify-center gap-2 border-2 border-primary text-primary1 hover:bg-primary1 hover:text-white hover:border-transparent transition-all duration-300 px-4 py-2 rounded-md text-xs font-bold"
        :class="buttonClass"
      >
        {{ info }}
        <ArrowRight
          class="size-3 group-hover:translate-x-2 transition-transform"
        />
      </a>
    </div>
  </div>
</template>
