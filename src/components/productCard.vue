<script setup>
import { CheckCircle } from "lucide-vue-next";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded shadow-xl border border-gray-100 overflow-hidden">
    <div class="flex flex-col lg:flex-row gap-8 p-6">
      <!-- Left: Product Content -->
      <div class="w-full lg:w-[70%] flex flex-col gap-4">
        <div class="flex items-center gap-4 mb-4">
          <img
            :src="product.logo"
            class="size-20 flex-shrink-0"
            alt="Product logo"
          />
          <div>
            <h3 class="text-lg font-bold text-primary1 uppercase mb-2">
              {{ product.title }}
            </h3>
            <p class="text-xs text-gray-900">
              {{ product.subtitle }}
            </p>
          </div>
        </div>

        <p class="text-sm text-gray-500 mb-4 leading-8">
          {{ product.overview }}
        </p>



        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            v-for="(feature, i) in product.features"
            :key="i"
            class="flex items-center gap-2 p-3  bg-gray-100 rounded shadow-sm hover:border-primary1 hover:text-primary1 hover:shadow-md transition cursor-pointer"
          >
            <CheckCircle class="w-5 h-5 text-primary1 mt-1" />
            <p class="text-xs text-gray-700">
              {{ feature }}
            </p>
          </div>
        </div>

        <div class="mt-4">
          <a
            :href="product.applicationUrl || '#'"
            target="_blank"
            rel="noopener"
          >
            <button
              class="bg-primary1 hover:bg-primary1/90 text-white text-sm font-semibold py-2 px-10 rounded shadow-md hover:shadow-lg transition-all duration-300"
            >
              View Product
            </button>
          </a>
        </div>
      </div>

      <!-- Right: Benefits Sidebar -->
      <div class="w-full lg:w-[30%] bg-gray-50 rounded p-4">
        <p class="text-lg font-semibold text-primary1 mb-4 uppercase">
          Key Benefits
        </p>

        <div class="space-y-4">
          <span
            v-for="(benefit, i) in product.benefits"
            :key="i"
            class="block text-[10px] text-gray-700 bg-white px-3 py-2 rounded border border-gray-200 hover:border-primary1/50 hover:text-primary1 transition cursor-pointer"
          >
            {{ benefit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
