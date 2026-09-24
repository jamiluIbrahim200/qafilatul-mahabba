<script setup>
import { ref } from "vue";
import CoreValues from "@/components/coreValues.vue";

// import infoData from "@/components/data/infoData";

const programs = ref([
  {
    title: "Environmental Day",
    image: new URL("@/assets/images/image3.jpeg", import.meta.url).href,
    description: `QEPI is an environmental initiative focused on sanitation, tree planting, and community awareness, promoting sustainable practices to combat desertification and build greener, healthier communities.`,
    link: "https://feeding.qafilatulmahabbah.org.ng",
  },
  {
    title: "Feeding Day",
    image: new URL("@/assets/images/image2.jpg", import.meta.url).href,
    description: `Relief & Feeding Day is a compassion-driven initiative providing meals, and essential aid to vulnerable families, focused on fighting hunger and strengthening community support.`,
    link: "https://feeding.qafilatulmahabbah.org.ng",
  },
  {
    title: "Education Drive",
    image: new URL("@/assets/images/image1.jpg", import.meta.url).href,
    description: `We believe education is the foundation of lasting change. By providing accessible, quality learning opportunities, we empower young minds with the knowledge needed to build a brighter future.`,
  },
]);
</script>
<template>
  <section class="px-6 py-16 bg-gray-100">
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
        v-for="(value, index) in programs"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
        data-aos-duration="300"
        :key="index"
        class="group relative bg-gray-50 rounded p-6 shadow-lg backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <CoreValues
          :image="value?.image"
          :title="value?.title"
          :description="value?.description"
        />
      </div>
    </div>
  </section>
</template>
