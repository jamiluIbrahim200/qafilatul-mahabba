<script setup>
import { Gift, ArrowUpRight } from "lucide-vue-next";
import { ref } from "vue";
import map from "@/assets/map.png";

const mapComponent = ref({
  image: map,
  title: "We are always ready to help.",
  description: "We believe that we can come together",
  button1: "Donate to the Poor",
  button2: "Support Deserving People",
});
</script>

<template>
  <!-- Full width background -->
  <div class="bg-gray-100 py-12">
    <div
      class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <!-- Map Section -->
      <div
        class="relative w-full flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <img
          :src="mapComponent.image"
          alt="Map of Nigeria"
          class="w-full h-auto object-contain rounded-lg"
        />
      </div>

      <!-- Content Section -->
      <div class="flex flex-col justify-center px-2 md:px-4">
        <p
          class="text-sm md:text-lg lg:text-2xl mb-3 text-black"
          data-aos="zoom-in"
          data-aos-duration="200"
          data-aos-delay="200"
        >
          {{ mapComponent.title }}
          <span class="ml-2 text-black">_________</span>
        </p>

        <h1
          class="text-xl md:text-3xl lg:text-5xl font-bold text-primary1 mt-2 mb-6 leading-tight"
        >
          {{ mapComponent.description }}
        </h1>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            class="flex items-center justify-center gap-2 bg-primary1 text-white px-8 py-4 rounded hover:scale-105 hover:-translate-y-1 transition duration-300 group"
          >
            <Gift class="size-6 group-hover:animate-bounce" />
            <span class="font-semibold">
              {{ mapComponent.button1 }}
            </span>
          </button>

          <button
            class="flex items-center justify-center gap-2 bg-primary2 text-white px-8 py-4 rounded hover:scale-105 hover:-translate-y-1 transition duration-300 group"
          >
            <ArrowUpRight class="size-6 group-hover:animate-bounce" />
            <span class="font-semibold">
              {{ mapComponent.button2 }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>