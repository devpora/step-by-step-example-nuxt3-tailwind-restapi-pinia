<script setup lang="ts">
import Hero from '@/components/website/homepage/Hero.vue'
import Titles from "~/components/website/homepage/Titles.vue";
import Features from "~/components/website/homepage/Features.vue";
</script>

<template>
  <NuxtLayout>
    <Hero />
    <Titles />
    <Features />
  </NuxtLayout>
</template>
