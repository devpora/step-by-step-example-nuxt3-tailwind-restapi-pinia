<script setup lang="ts">
const isDark = ref<boolean>(false)
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
  <div
      :class="{ 'dark': isDark }"
      class="flex flex-col h-screen bg-white text-black dark:bg-gray-900 dark:text-white"
  >
    <header class="text-gray-800 py-4 fixed w-full z-10 bg-white dark:bg-gray-900">
      <div class="container mx-auto flex justify-between items-center px-4 text-black dark:text-white">
        <h1 class="text-2xl font-bold">Nuxt3</h1>
        <span class="text-black-700 text-red-400 dark:text-green-400">Mode: {{isDark ? 'Dark'  : 'Light'}}</span>
        <button class="hover:text-orange-700 hover:dark:text-orange-200" @click="changeDark">
          {{isDark ? 'Light'  : 'Dark'}}
        </button>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8 flex-grow flex items-center justify-center pt-20">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-extralight text-yellow-500 mb-4">
          Hello world!
        </h1>
        <h2 class="text-3xl font-light text-red-600 mb-4">
          Hello world!
        </h2>
        <h3 class="text-3xl font-bold underline text-green-400 mb-4">
          Ahoj svet!
        </h3>
        <h4 class="text-3xl font-extrabold underline text-gray-500 mb-4">
          Ahoj svet!
        </h4>
      </div>
    </main>
    <footer class="py-4">
      <div class="container mx-auto px-4">
        <p class="text-center">Copyright © {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>