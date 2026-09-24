<script setup>
import infoData from "@/components/data/infoData";
import Hero from "@/components/hero.vue";
</script>
<template>
 <Hero
   :title="infoData?.generalData?.clothing"
   :bg-image="infoData?.generalData?.bgImage"
  />
</template>
