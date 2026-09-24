<template>
  <Layout>
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="programs">
      <Programs />
    </section>
    <section id="news">
      <News />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </Layout>
</template>
<script setup>
import Layout from "@/layouts/layout.vue";
import Hero from "./carousel.vue";
import About from "../about/index.vue";
import News from "../news/index.vue";
import Contact from "../contact/index.vue";
import Programs from "../program/index.vue";
</script>
