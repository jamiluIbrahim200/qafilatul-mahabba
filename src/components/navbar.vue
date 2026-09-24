<script setup>
import { ref } from "vue";
import infoData from "./data/infoData";
import PrimaryButton from "./primaryButton.vue";
const isOpen = ref(false);
const navLinks = [
  { name: "About Us", to: { path: "/", hash: "#about" } },
  { name: "Programs", to: { path: "/", hash: "#programs" } },
  { name: "News", to: { path: "/", hash: "#news" } },
  { name: "Contact Us", to: { path: "/", hash: "#contact" } },
];
const contactLink = { name: "Contact Us", to: { path: "/", hash: "#contact" } };
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <header
    class="sticky top-0 left-0 w-full z-50 transition-all duration-300 pt-4"
  >
    <nav class="">
      <!-- Desktop -->
      <div class="hidden lg:flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center pt-6">
          <img
            class="w-24 h-16 object-contain contrast-125 saturate-125"
            :src="infoData?.generalData?.generalLogo"
            alt="Logo"
          />
         <div class="">
           <div class="text-3xl font-bold uppercase text-white">
            Qafilatul Mahabbah
          </div>
          <p class="font-bold text-primary2">The Caravan of Love</p>
         </div>
        </router-link>

        <!-- Nav Links -->
        <div class="flex space-x-12 text-4xl font-bold uppercase text-white">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.to"
            class="text-xl font-bold hover:font-semibold uppercase text-white hover:text-primary2  hover:duration-500 hover:transition-all transform hover:scale-105"
            active-class="text-primary2 font-semibold"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>

      <!-- Contact Button -->
      <!-- <primary-button
          :li="{ path: '/', hash: '#contact' }"
          :icon1="SendHorizontal"
          :icon2="ArrowBigRightDash"
          :custom="`text-xs`"
          :title="`Contact Us`"
        /> -->

      <!-- Mobile -->
      <div class="lg:hidden flex items-center justify-between px-4">
        <router-link to="/">
          <img
            class="h-8 object-contain"
            :src="infoData?.generalData?.generalLogo"
            alt="Logo"
          />
        </router-link>

        <!-- Hamburger -->
        <button @click="toggleMenu" class="size-4 relative text-primary1">
          <span class="absolute inset-0 flex flex-col justify-between">
            <span
              class="h-0.5 bg-primary2"
              :class="isOpen && 'rotate-45 translate-y-2'"
            ></span>
            <span class="h-0.5 bg-primary2" :class="isOpen && 'opacity-0'"></span>
            <span
              class="h-0.5 bg-primary2"
              :class="isOpen && '-rotate-45 -translate-y-2'"
            ></span>
          </span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300"
        leave-active-class="transition-all duration-200"
      >
        <div
          v-if="isOpen"
          class="absolute top-full left-0 right-0 bg-white shadow-xl border-t"
        >
          <div class="flex flex-col px-6 py-6 space-y-8">
            <router-link
              v-for="link in navLinks"
              :key="link.name"
              :to="link.to"
              @click="isOpen = false"
              class="text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition"
            >
              {{ link.name }}
            </router-link>

            <router-link
              :to="{ path: '/', hash: '#contact' }"
              @click="isOpen = false"
              class="mt-4 w-full text-center flex items-center align-items-center justify-center py-2 bg-primary1 text-white rounded font-semibold"
            >
              <component :is="PhoneCall" class="me-2 size-5" />
              Contact Us
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>

  <!-- Mobile Backdrop -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    @click="isOpen = false"
  ></div>
</template>



