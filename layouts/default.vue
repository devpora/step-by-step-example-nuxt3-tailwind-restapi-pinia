<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>