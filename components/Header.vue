<script setup lang="ts">
import { MoonIcon, SunIcon, LanguageIcon } from '@heroicons/vue/24/outline'

const isDark = ref<boolean>(false)
const showLanguages = ref<boolean>(false)

const changeDark = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

const { locales, setLocale } = useI18n()

const onChangeLocale = async (locale: any) => {
  await setLocale(locale.code)
}
</script>
<template>
  <header class="text-gray-800 py-4 fixed w-full z-10 bg-white dark:bg-gray-900">
    <div class="container mx-auto flex justify-between items-center px-4 text-black dark:text-white">
      <h1 class="text-2xl font-bold">Nuxt3</h1>
      <span class="text-black-700 text-red-400 dark:text-green-400">{{ $t('header.title') }}</span>
      <div class="flex relative">
        <div class="relative">
          <LanguageIcon class="h-6 w-6 text-blue-500 cursor-pointer" @click="showLanguages = !showLanguages" />
          <div v-if="showLanguages" class="absolute top-full left-0 z-10 my-2 shadow-lg">
            <div v-for="locale in locales" :key="locale.code" class="px-4 cursor-pointer bg-teal-400 hover:bg-teal-600 dark:bg-sky-500 dark:hover:bg-sky-700" @click="onChangeLocale(locale)">
              {{ locale.name }}
            </div>
          </div>
        </div>
        <div @click="changeDark" class="ml-4">
          <MoonIcon v-if="isDark" class="h-6 w-6 text-blue-500" />
          <SunIcon v-else class="h-6 w-6 text-blue-500" />
        </div>
      </div>
    </div>
  </header>
</template>