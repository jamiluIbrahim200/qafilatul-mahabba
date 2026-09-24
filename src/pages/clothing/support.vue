<script setup>
import { Shirt, Package, Users, Gift, HandHelping, Boxes } from "lucide-vue-next";
import infoData from "@/components/data/infoData";

const offerings = [
  {
    title: "Clothing Distribution",
    description:
      "New and gently used clothes distributed to children and families in need.",
    icon: Shirt,
  },
  {
    title: "Essential Wear",
    description:
      "Providing everyday clothing such as shirts, trousers, dresses, and footwear.",
    icon: Package,
  },
  {
    title: "Family Support Packs",
    description:
      "Prepared clothing bundles organized to support households with multiple children.",
    icon: Boxes,
  },
  {
    title: "Community Donations",
    description:
      "Clothes collected from donors and distributed to vulnerable members of the community.",
    icon: Users,
  },
  {
    title: "Volunteer Outreach",
    description:
      "Volunteers working together to sort, organize, and distribute clothing materials.",
    icon: HandHelping,
  },
  {
    title: "Special Clothing Gifts",
    description:
      "Additional clothing items provided to children to ensure they are properly dressed.",
    icon: Gift,
  },
];
</script>

<template>
  <section class="relative bg-gray-50 py-16 overflow-hidden">
    <!-- Background -->
    <!-- <div class="absolute inset-0">
      <img
        :src="infoData?.generalData?.bgImage2"
        class="w-full h-full object-cover object-center"
        alt="background"
      />
    </div>
    <div class="absolute inset-0 bg-primary1/10"></div> -->

    <div class="relative px-6">
      <!-- Heading -->
      <h2
        class="text-sm md:text-lg lg:text-xl text-center font-semibold mb-4 text-primary1 uppercase tracking-wider"
      >
        Clothing Support Initiative
      </h2>

      <p
        class="text-lg md:text-xl lg:text-3xl text-center font-bold mb-12 text-primary2"
      >
        Providing Essential Clothing for the Needy
      </p>

      <!-- Offerings Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, idx) in offerings"
          :key="idx"
          class="bg-white rounded hover:cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center gap-4 group"
          data-aos="fade-up"
          :data-aos-delay="idx * 150"
        >
          <!-- Step Number
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary1 text-white text-lg font-bold mb-2">
            {{ idx + 1 }}
          </div> -->

          <!-- Icon -->
          <div class="w-10 h-10 text-primary2">
            <component
              :is="item.icon"
              class="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-semibold text-gray-800">{{ item.title }}</h3>

          <!-- Description -->
          <p
            class="text-gray-600 text-[14px] text-center"
            style="line-height: 1.8rem"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
