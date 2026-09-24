<script setup>
import infoData from "@/components/data/infoData";
import Hero from "@/components/hero.vue";
</script>
<template>
 <Hero
   :title="infoData?.generalData?.orphan"
   :bg-image="infoData?.generalData?.bgImage"
  />
</template>
