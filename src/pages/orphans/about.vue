<script setup>
import { Gift, BookOpen, Gamepad2, Users, Utensils, Heart } from "lucide-vue-next";
import infoData from "@/components/data/infoData";

const offerings = [
  {
    title: "Care Packages",
    description:
      "Essential packages including food items, clothing, and hygiene materials distributed to every child.",
    icon: Gift,
  },
  {
    title: "Educational Gifts",
    description:
      "School bags, books, and learning materials to support the children's academic journey.",
    icon: BookOpen,
  },
  {
    title: "Fun & Recreation",
    description:
      "Games, music, and joyful activities designed to create lasting memories for the children.",
    icon: Gamepad2,
  },
  {
    title: "Mentorship Moments",
    description:
      "Volunteers and community members spending meaningful time encouraging and inspiring the children.",
    icon: Users,
  },
  {
    title: "Shared Meals",
    description:
      "A special meal where children, volunteers, and guests celebrate together in unity.",
    icon: Utensils,
  },
  {
    title: "Gifts of Hope",
    description:
      "Thoughtful gifts that remind every child they are valued, loved, and supported.",
    icon: Heart,
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
      <h2 class="text-sm md:text-lg lg:text-xl text-center font-semibold mb-4 text-primary1 uppercase tracking-wider">
       What We Provide
      </h2>
      <p class="text-lg md:text-xl lg:text-3xl text-center font-bold mb-12 text-primary2">
       Support and Care for Orphaned Children
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
            <component :is="item.icon" class="w-10 h-10 transition-transform duration-300 group-hover:scale-110"/>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-semibold text-gray-800">{{ item.title }}</h3>

          <!-- Description -->
          <p class="text-gray-600 text-[14px] text-center" style="line-height:1.8rem">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>