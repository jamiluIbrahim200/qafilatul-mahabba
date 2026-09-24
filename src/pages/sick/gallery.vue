<script setup>
const gallery = [
  { id: 1, src: new URL("@/assets/images/image14.jpeg", import.meta.url).href },
];
</script>

<template>
  <section id="gallery" class="py-16 bg-gray-50">
    <div class="px-6">
      <h2
        class="text-3xl md:text-4xl font-bold text-primary1 text-center mb-12"
      >
        Moments We Cherish
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="photo in gallery"
          :key="photo.id"
          class="relative group roundedv overflow-hidden shadow-lg hover:shadow-2xl hover:cursor-not-allowed transition-shadow duration-300"
        >
          <img
            :src="photo.src"
            class="w-full h-64 object-cover rounded transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>
