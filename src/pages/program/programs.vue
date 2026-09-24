<script setup>
// import data from '@/components/data/infoData';
import CoreValues from "@/components/coreValues.vue";
import infoData from "@/components/data/infoData";
</script>

<template>
  <section class="overflow-hidden px-6 py-6 bg-gray-100">
    <!-- Heading -->
    <div class="text-center mb-8">
      <h2
        class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-primary1 italic"
      >
        Our Programs
      </h2>
      <!-- <p class="text-primary2 text-4xl font-semibold">See The Reasons Why We Standout </p> -->
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(value, index) in infoData?.programs"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
        data-aos-duration="300"
        :key="index"
        class="group relative bg-gray-50 rounded p-6 shadow-lg backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <CoreValues
          :icon="value?.icon"
          :title="value?.title"
          :translation="value?.translation"
          :description="value?.description"
          :info="'Learn More'"
          :link="value?.link"
          :show-button="true"
        />
      </div>
    </div>
  </section>
</template>
