<script setup lang="ts">
import { Bars3Icon, LanguageIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '~/store/user'

const isDark = ref<boolean>(false)
const showLanguages = ref<boolean>(false)
const showMobileMenu  = ref<boolean>(false)
const localePath = useLocalePath()
const authStore = useAuthStore()
const { locales, setLocale } = useI18n()

const changeDark = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

const onChangeLocale = async (locale: any) => {
  await setLocale(locale.code)
}


const isAuthenticated = computed(() => {
  return authStore.isLoggedIn
})

const logout = async () => {
  await authStore.logout()
}
</script>
<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="bg-white dark:bg-gray-900 pt-4 pr-8 pb-4 pl-8">
      <div>
        <nav class="w-full">
          <div class="flex w-full justify-between max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
            <div class="flex flex-row justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex">
              <nuxt-link to="#" class="text-gray-600 dark:text-gray-300 text-center mr-6 font-medium text-base">
                {{ $t('global.chocolate') }}
              </nuxt-link>
              <nuxt-link to="#" class="text-gray-600 dark:text-gray-300 text-center mr-6 font-medium text-base">
                {{ $t('global.jujubes') }}
              </nuxt-link>
              <nuxt-link to="#" class="text-gray-600 dark:text-gray-300 text-center font-medium text-base">
                {{ $t('global.croissant') }}
              </nuxt-link>
            </div>
            <div class="bg-white flex-row flex items-center justify-center order-first md:order-none">
              <nuxt-link :to="localePath('/')">
                <img src="https://via.placeholder.com/300x154" class="btn- w-12 md:w-16" alt="logo"/>
              </nuxt-link>
            </div>
            <div class="flex justify-center items-center md:justify-start hidden md:flex">
              <div class="relative">
                <LanguageIcon class="h-6 w-6 text-blue-500 cursor-pointer" @click="showLanguages = !showLanguages" />
                <div v-if="showLanguages" class="absolute top-full left-0 z-10 my-2 shadow-lg">
                  <div v-for="locale in locales" :key="locale.code" class="px-4 cursor-pointer bg-teal-400 hover:bg-teal-600 dark:bg-sky-500 dark:hover:bg-sky-700" @click="onChangeLocale(locale)">
                    {{ locale.name }}
                  </div>
                </div>
              </div>
              <div @click="changeDark" class="mx-4">
                <MoonIcon v-if="isDark" class="h-6 w-6 text-blue-500" />
                <SunIcon v-else class="h-6 w-6 text-blue-500" />
              </div>
              <nuxt-link
                v-if="!isAuthenticated"
                :to="localePath('/auth/login')"
                class="h-9 w-28 text-gray-600 bg-white border-2 border-white flex items-center justify-center text-center rounded-lg text-lg font-normal mr-6"
              >
                {{ $t('global.signIn') }}
              </nuxt-link>
              <nuxt-link
                v-if="!isAuthenticated"
                :to="localePath('/auth/register')"
                class="h-9 w-28 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mr-auto"
              >
                {{ $t('global.signUp') }}
              </nuxt-link>
              <div
                v-if="isAuthenticated"
                class="h-9 w-28 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mr-auto"
              >
                <button @click="logout">Logout</button>
              </div>
            </div>
            <div class="md:hidden flex items-center">
              <div class="outline-none mobile-menu-button" @click="showMobileMenu = !showMobileMenu">
                <Bars3Icon class="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
          <div class="mobile-menu" v-show="showMobileMenu">
            <div>
              <div class="flex flex-col">
                <nuxt-link to="#" class="text-gray-600 text-center mt-2 font-medium text-base">
                  {{ $t('global.chocolate') }}
                </nuxt-link>
                <nuxt-link to="#" class="text-gray-600 text-center mt-2 font-medium text-base">
                  {{ $t('global.jujubes') }}
                </nuxt-link>
                <nuxt-link to="#" class="text-gray-600 text-center mt-2 font-medium text-base">
                  {{ $t('global.croissant') }}
                </nuxt-link>
                <nuxt-link to="/auth/login" class="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center
                  text-center rounded-lg text-lg font-normal mt-2 mr-auto ml-auto">
                  {{ $t('global.signIn') }}
                </nuxt-link>
                <nuxt-link to="/auth/register" class="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex
                  items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mt-2 mr-auto
                  ml-auto">
                  {{ $t('global.signUp') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>