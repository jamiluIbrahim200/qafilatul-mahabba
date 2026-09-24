<script setup>
import image from "@/assets/bg/bg.jpeg";
import {
  Home,
  User,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-vue-next";
import infoData from "./data/infoData";
const navLinks = [
  { name: "About Us", to: { path: "/", hash: "#about" } },
  { name: "News", to: { path: "/", hash: "#news" } },
  { name: "Contact Us", to: { path: "/", hash: "#contact" } },
];
const footerdata = {
  background: image,
};
</script>

<template>
  <footer class="relative overflow-hidden text-gray-300">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="footerdata?.background"
        alt="Footer background"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="absolute inset-0 bg-primary1/85 bg-blur-lg"></div>

    <!-- Content -->
    <div
      class="relative z-10  px-6 md:px-8 py-12 md:py-8 space-y-10"
    >
      <!-- Top Section -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white"
      >
        <!-- footerdata -->
        <div>
          <h2 class="font-bold text-2xl mb-3">
            {{ infoData?.generalData?.name }}
          </h2>
          <p class="text-sm  text-gray-300 mb-2" 
          style="line-height:2rem"
          >
            {{ infoData?.values[0]?.description }}
          </p>
        <div class="flex flex-wrap gap-3 py-1">
          <a
            v-for="(social, index) in infoData?.socialLinks"
            :key="index"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full hover:bg-primary7/10 transition-colors"
          >
            <div
              class="bg-primary2/10 p-2 rounded-full border border-primary2/20 hover:duration-300 hover:transition-all"
            >
              <component
                :is="social.icon"
                class="w-5 h-5 text-primary2 hover:text-primary2/90 transition"
              />
            </div>
          </a>
        </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="font-semibold text-primary7 uppercase text-sm mb-4">
            Contact
          </h3>
          <div
            v-for="(item, index) in infoData?.contactInfo"
            :key="index"
            class="flex items-start gap-4"
          >
            <div class="p-2 rounded-full bg-white/10">
              <component :is="item.icon" class="w-4 h-4 text-primary2" />
            </div>
            <div class="mb-2">
              <p class="text-sm text-white mb-1 font-medium">
                {{ item.title }}
              </p>
              <p class="text-xs text-gray-300 leading-relaxed">
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-primary7 uppercase text-sm mb-4">
            Quick Links
          </h3>
          <nav class="flex flex-col space-y-3">
            <router-link
              v-for="link in navLinks"
              :key="link.name"
              :to="link.to"
              class="text-sm text-gray-300 hover:text-primary7 transition-colors flex items-center gap-2 group"
            >
              <ArrowRight
                class="w-3 h-3 text-primary2 opacity-80 group-hover:translate-x-2 transition-transform"
              />
              <span>{{ link.name }}</span>
            </router-link>
          </nav>
        </div>
        <!-- Newsletter Subscription -->
        <div class="space-y-4">
          <h3 class="font-semibold text-white uppercase tracking-wider text-sm">
            Newsletter
          </h3>
          <p class="text-gray-300 text-sm">
            Subscribe to our newsletter for updates
          </p>
          <div class="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              class="px-4 py-2 text-sm rounded-l-md text-primary1 focus:outline-none focus:ring-1 focus:ring-white w-full"
            />
            <button
              class="bg-primary2 text-white px-4 py-2 rounded-r-md text-sm hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-primary2" />
      <!-- Bottom Section -->
      <div class="text-center text-sm text-white">
        <p
          class="text-gray-300 hover:text-primary7 transition-colors"
        >
          © {{ infoData?.generalData?.year }} {{ infoData?.generalData?.name }}.
          All rights reserved
          <span class="text-primary2">{{
            infoData?.generalData?.desiger
          }}</span></p
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.router-link-active {
  @apply text-primary7 font-medium;
}
</style>
