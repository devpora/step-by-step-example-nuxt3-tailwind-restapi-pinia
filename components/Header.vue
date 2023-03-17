<script setup lang="ts">
const isDark = ref<boolean>(false)
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const changeDark = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
</script>
<template>
  <header class="text-gray-800 py-4 fixed w-full z-10 bg-white dark:bg-gray-900">
    <div class="container mx-auto flex justify-between items-center px-4 text-black dark:text-white">
      <h1 class="text-2xl font-bold">Nuxt3</h1>
      <span class="text-black-700 text-red-400 dark:text-green-400">Mode: {{isDark ? 'Dark'  : 'Light'}}</span>
      <div @click="changeDark">
        <MoonIcon v-if="isDark" class="h-6 w-6 text-blue-500"/>
        <SunIcon v-else class="h-6 w-6 text-blue-500"/>
      </div>
    </div>
  </header>
</template>