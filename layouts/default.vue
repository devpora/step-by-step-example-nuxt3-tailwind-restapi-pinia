<template>
  <div class="bg-white dark:bg-gray-900">
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