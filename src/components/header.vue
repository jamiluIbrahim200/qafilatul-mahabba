<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import infoData from "./data/infoData";
import PrimaryButton from "./primaryButton.vue";
import { SendHorizontal, ArrowBigRightDash } from "lucide-vue-next";
const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

// Dynamic hash links based on current route
const route = useRoute();
const linkTo = (hash) => ({ name: route.name, hash });
</script>

<template>
  <div class="relative">
    <nav class="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div class="px-2 py-1">
        <!-- Desktop Layout -->
        <div class="hidden lg:flex justify-between items-center">
          <!-- Left: Logo -->
          <div class="flex-shrink-0">
            <router-link :to="{ name: route.name }">
              <img
                class="w-20 h-12 object-contain"
                :src="infoData?.generalData?.generalLogo"
                alt="School Logo"
              />
            </router-link>
          </div>

          <!-- Center: Navigation Links -->
          <div class="flex items-center space-x-12 mx-auto uppercase">
            <router-link
              :to="{ name: route.name }"
              class="text-black hover:text-primary2 transition duration-300 text-base font-medium"
              active-class=" font-semibold"
              >Home</router-link
            >
            <router-link
              :to="linkTo('#about')"
              class="text-black hover:text-primary2 transition duration-300 text-base font-medium"
              active-class=" font-semibold"
              >About Us</router-link
            >
            <router-link
              :to="linkTo('#gallery')"
              class="text-black hover:text-primary2 transition duration-300 text-base font-medium"
              active-class="font-semibold"
              >Gallery</router-link
            >
          </div>

          <!-- Right: Contact Button -->
          <div class="flex-shrink-0">
          
              <PrimaryButton
                :li="linkTo('#contact')"
                :icon1="SendHorizontal"
                :icon2="ArrowBigRightDash"
                :custom="`text-xs`"
                :title="`Connect With Us`"
              />
           
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="lg:hidden">
          <!-- Top Bar: Logo + Toggle -->
          <div class="flex items-center justify-between px-4">
            <router-link :to="{ name: route.name }" @click="isOpen = false">
              <img
                class="h-8 object-contain"
                :src="infoData?.generalData?.generalLogo"
                alt="School Logo"
              />
            </router-link>

            <!-- Toggle Button -->
            <div
              @click="toggleMenu"
              class="relative size-3 text-secondary focus:outline-none z-60"
              aria-label="toggle menu"
            >
              <span
                class="absolute inset-0 flex flex-col justify-between h-full transition-all duration-300 ease-in-out"
              >
                <span
                  :class="[
                    'w-full h-0.5 bg-current rounded transform transition duration-300',
                    isOpen ? 'rotate-45 translate-y-2.5' : '',
                  ]"
                ></span>
                <span
                  :class="[
                    'w-full h-0.5 bg-current transition duration-300',
                    isOpen ? 'opacity-0' : 'opacity-100',
                  ]"
                ></span>
                <span
                  :class="[
                    'w-full h-0.5 bg-current rounded transform transition duration-300',
                    isOpen ? '-rotate-45 -translate-y-2.5' : '',
                  ]"
                ></span>
              </span>
            </div>
          </div>

          <!-- Mobile Dropdown -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 -translate-y-4"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <div
              v-if="isOpen"
              class="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-50"
            >
              <div class="flex flex-col px-6 py-6 space-y-4">
                <router-link
                  :to="{ name: route.name }"
                  class="text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  @click="isOpen = false"
                  >Home</router-link
                >
                <router-link
                  :to="linkTo('#about')"
                  class="text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  @click="isOpen = false"
                  >About Us</router-link
                >
                <router-link
                  :to="linkTo('#gallery')"
                  class="text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  @click="isOpen = false"
                  >Gallery</router-link
                >

                <div class="pt-4 border-t border-gray-200 mt-2">
                  <router-link :to="linkTo('#contact')" @click="isOpen = false">
                    <button
                      class="w-full flex justify-center items-center gap-2 rounded-xl text-white font-semibold bg-primary1 uppercase px-6 py-4 overflow-hidden transition-all duration-300 hover:bg-primary1 active:scale-95"
                    >
                      Contact Us
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </nav>

    <!-- Mobile Backdrop -->
    <transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        @click="isOpen = false"
      ></div>
    </transition>
  </div>
</template>

<style scoped>
/* Keep your styles exactly as before — no changes needed */
</style>
