<script setup>
import Header from '~/components/website/Header.vue'
import Footer from '~/components/website/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
