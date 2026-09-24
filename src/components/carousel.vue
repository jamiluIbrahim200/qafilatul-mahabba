<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { ArrowRight } from "lucide-vue-next";
import PrimaryButton2 from "@/components/primaryButton2.vue";
import Navbar from "@/components/navbar.vue";
// Slides (each slide owns its video)
const slides = [ 
    { id: 1, label: "Environmental Day", subtitle: "Environmental Stewardship", description: "Community clean-ups, tree planting, and sanitation.", 
    // video: new URL("@/assets/videos/vid3.mp4", import.meta.url).href, 
       image: new URL("@/assets/images/image1.jpg", import.meta.url).href, link: "https://feeding.qafilatulmahabbah.org.ng", }, { id: 2, label: "Feeding Initiative", subtitle: "Feeding with Dignity", description: "Free meals offered with compassion and respect.", image: new URL("@/assets/images/image1.jpg", import.meta.url).href, // video: new URL("@/assets/videos/vid1.mp4", import.meta.url).href, link: "https://feeding.qafilatulmahabbah.org.ng", }, { id: 3, label: "Education Drive", subtitle: "Empowering Through Knowledge", description: "Learning support, mentorship, and guidance.", image: new URL("@/assets/images/image1.jpg", import.meta.url).href, // video: new URL("@/assets/videos/vid4.mp4", import.meta.url).href, link: "#", }, ]; const currentSlide = ref(0); let interval = null; // Auto rotate const startAutoRotate = () => { interval = setInterval(() => { nextSlide(); }, 20000); }; const stopAutoRotate = () => { clearInterval(interval); }; const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.length; }; const goToSlide = (index) => { currentSlide.value = index; }; // Active slide (computed) const activeSlide = computed(() => slides[currentSlide.value]); onMounted(startAutoRotate); onBeforeUnmount(stopAutoRotate);
</script>
<template>
  <!-- ROOT: height locked, no padding -->
  <div class="relative h-screen overflow-hidden flex flex-col">
    <!-- BACKGROUND VIDEO -->
    <Transition name="slide" mode="out-in">
      <!-- <video :key="activeSlide.video" class="absolute inset-0 w-full h-full object-cover brightness-80" autoplay muted loop playsinline > <source :src="activeSlide.video" type="video/mp4" /> </video> -->
      <img
        :src="activeSlide?.image"
        alt="bg-image"
        class="absolute inset-0 w-full h-full object-cover brightness-80"
      />
    </Transition>
    <!-- INNER WRAPPER: padding moved here -->
    <div class="relative z-10 h-full flex flex-col px-4 md:px-16">
      <Navbar class="z-50" />
      <!-- CONTENT -->
      <div class="flex flex-1 md:items-start items-center md:pt-20">
        <div class="text-white text-left">
          <h1 class="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-8">
            {{ activeSlide?.subtitle }}
          </h1>
          <h2 class="text-xl md:text-3xl lg:text-2xl mb-8">
            {{ activeSlide.description }}
          </h2>
          <PrimaryButton2
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
      <div class="hidden md:block pb-6">
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
            <div class="text-2xl font-bold mb-2">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <div class="text-2xl font-bold uppercase opacity-80">
              {{ slide.label }}
            </div>
          </button>
        </div>
      </div>
      <!-- MOBILE CONTROLS -->
      <div class="md:hidden pb-6">
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
/* SLEEK SLIDE TRANSITION */
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.6s ease;
}
.slide-enter-from {
  transform: translateX(80px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-80px);
  opacity: 0;
}
</style>
