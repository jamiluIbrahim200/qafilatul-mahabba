<script setup>
import Layout from "@/layouts/lay.vue";
import Hero from "./hero.vue";
import Support from "./about.vue";
import Gallery from "./gallery.vue";
import Contact from "./contact.vue";
</script>

<template>
  <Layout>
    <Hero />
    <section id="about"><Support /></section>
    <section id="gallery"><Gallery /></section>
    <section id="contact"><Contact /></section>
  </Layout>
</template>
