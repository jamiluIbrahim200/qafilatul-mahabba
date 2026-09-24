<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
  title: String,
  description: String,
  bgImage: String,
});
</script>
<template>
  <section class="relative py-8 h-auto flex items-center">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        :src="bgImage"
        class="w-full h-full object-cover"
        alt="bg-image"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 container mx-auto px-4 text-center text-white pt-16"
      data-aos="zoom-in"
      data-aos-delay="600"
      data-aos-duration="500"
    >
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-bold uppercase italic py-10"
      >
        {{ title}}
      </h1>
      <div
        class="flex justify-center"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500"
      >
      </div>
    </div>
  </section>
</template>
