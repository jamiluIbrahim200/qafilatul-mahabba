<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { ArrowRight } from "lucide-vue-next";
import Button from "@/components/primarybutton2.vue";
import Navbar from "@/components/navbar.vue";
// Slides (each slide owns its video)
const slides = [
  {
    id: 1,
    label: "Yaumul Bi'a",
    subtitle: "Environmental Day",
    description: "Community clean ups, tree planting, and sanitation.",
    image: new URL("@/assets/images/image3.jpeg", import.meta.url).href,
    link: "https://qepi.qafilatulmahabbah.org.ng", // external
  },
  {
    id: 2,
    label: "Yaumul Id'am",
    subtitle: "Feeding Day",
    description: "Free meals offered with compassion and respect.",
    image: new URL("@/assets/images/image9.jpeg", import.meta.url).href,
    link: "https://qfi.qafilatulmahabbah.org.ng", // external
  },
  {
    id: 3,
    label: "Da'wat Ta'lim",
    subtitle: "Education Drive",
    description: "Learning support, mentorship, and guidance.",
    image: new URL("@/assets/images/image1.jpg", import.meta.url).href,
    link: "https://qedi.qafilatulmahabbah.org.ng", // external
  },
  {
    id: 4,
    label: "Yaumul Ayta'am",
    subtitle: "Orphans Day",
    description: "Providing food, welfare, and long term support for orphans.",
    image: new URL("@/assets/images/image13.jpeg", import.meta.url).href,
    link: "/orphans", // internal route
  },
  {
    id: 5,
    label: "Yaumul Kiswah",
    subtitle: "Clothing Day",
    description: "Distributing Essential Clothing for the Needy.",
    image: new URL("@/assets/images/image21.jpeg", import.meta.url).href,
    link: "/clothing", // internal route
  },
  {
    id: 6,
    label: "Yaumul Marda",
    subtitle: "Day of the Sick",
    description:
      "Providing care, support, and medical aid to the sick and vulnerable.",
    image: new URL("@/assets/images/image14.jpeg", import.meta.url).href,
    link: "/sick", // internal route
  },
];
const currentSlide = ref(0);
let interval = null;

// Auto rotate
const startAutoRotate = () => {
  interval = setInterval(() => {
    nextSlide();
  }, 20000);
};

const stopAutoRotate = () => {
  clearInterval(interval);
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Active slide (computed)
const activeSlide = computed(() => slides[currentSlide.value]);

onMounted(startAutoRotate);
onBeforeUnmount(stopAutoRotate);
</script>
<template>
  <!-- ROOT: height locked, no padding -->
  <div class="relative h-screen overflow-hidden flex flex-col">
    <!-- BACKGROUND VIDEO -->
    <Transition name="slide-horizontal">
      <div :key="activeSlide.image" class="absolute inset-0">
        <!-- Image -->
        <img
          :src="activeSlide.image"
          alt="background"
          class="w-full h-full object-cover object-top"
        />

        <!-- Professional Overlay -->
        <div class="absolute inset-0 bg-black/35"></div>
      </div>
    </Transition>

    <!-- INNER WRAPPER: padding moved here -->
    <div class="relative z-10 h-full flex flex-col px-4 md:px-16">
      <Navbar class="z-50" />
      <!-- CONTENT -->
      <div class="flex flex-1 items-center lg:items-start lg:pt-20">
        <div class="text-white text-left">
          <h1
            class="text-3xl md:text-2xl lg:text-7xl font-extrabold mb-8 uppercase"
          >
            {{ activeSlide?.label }}
          </h1>
          <h3
            class="text-xl md:text-xl lg:text-3xl font-extrabold mb-8 capitalize italic"
          >
            {{ activeSlide?.subtitle }}
          </h3>

          <h2 class="text-sm md:text-xl lg:text-2xl mb-8">
            {{ activeSlide.description }}
          </h2>
          <Button
            v-if="activeSlide.link"
            :link="activeSlide.link"
            title="Learn More"
            :icon1="ArrowRight"
            :icon2="ArrowRight"
            class="w-80"
          />
        </div>
      </div>
      <!-- DESKTOP NAVIGATION -->
      <div class="hidden lg:block pb-6">
        <div class="flex w-full gap-4">
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            @click="goToSlide(index)"
            class="flex-1 text-left p-4 hover:bg-white/10 text-white transition"
            :class="currentSlide === index ? 'bg-white/20 text-primary1' : ''"
          >
            <div
              class="h-2 mb-6"
              :class="currentSlide === index ? 'bg-primary2' : 'bg-white'"
            ></div>

            <div class="text-xl font-bold mb-2">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <div class="text-sm font-bold uppercase opacity-80">
              {{ slide.subtitle }}
            </div>
          </button>
        </div>
      </div>

      <!-- MOBILE CONTROLS -->
      <div class="lg:hidden pb-6">
        <div class="flex justify-between items-center text-white">
          <button
            @click="
              currentSlide = (currentSlide - 1 + slides.length) % slides.length
            "
          >
            Prev
          </button>

          <span class="font-semibold">
            {{ currentSlide + 1 }} / {{ slides.length }}
          </span>

          <button @click="nextSlide">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-horizontal-enter-active,
.slide-horizontal-leave-active {
  position: absolute;
  inset: 0;
  transition: transform 1.8s cubic-bezier(0.65, 0, 0.35, 1);
}

/* New slide enters slowly from right */
.slide-horizontal-enter-from {
  transform: translateX(100%);
}

.slide-horizontal-enter-to {
  transform: translateX(0%);
}

/* Old slide leaves smoothly to left */
.slide-horizontal-leave-from {
  transform: translateX(0%);
}

.slide-horizontal-leave-to {
  transform: translateX(-100%);
}
</style>
