<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '~/store/user'

const isDark = ref<boolean>(false)
const authStore = useAuthStore()
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

const changeDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

const onChangeLocale = async (locale: string) => {
  await setLocale(locale)
}

const isAuthenticated = computed(() => {
  return authStore.isLoggedIn
})

const logout = async () => {
  await authStore.logout()
}
</script>
<template>
  <nav
    class="flex items-center w-full h-24 select-none mx-auto px-3 bg-indigo-600 dark:bg-indigo-900"
  >
    <div
      class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center max-w-7xl"
    >
      <nuxt-link
        :to="localePath('/')"
        class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0"
      >
        <span class="p-1 text-xl font-black leading-none text-white select-none"
          ><span class="">tails</span
          ><span class="text-indigo-300" data-primary="indigo-300"
            >.</span
          ></span
        >
      </nuxt-link>
      <div
        class="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex"
      >
        <div
          class="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto"
        >
          <div
            class="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center"
            data-primary="indigo-700"
          >
            <nuxt-link
              :to="localePath('/')"
              class="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center"
              data-primary="indigo-700"
            >
              {{ $t('global.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/icons')"
              class="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center"
              data-primary="indigo-700"
            >
              {{ $t('global.icons') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/user')"
              class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
              data-primary="indigo-800"
            >
              {{ $t('global.aboutMe') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/admin')"
              class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
              data-primary="indigo-800"
            >
              {{ $t('global.dashboard') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/auth/login')"
              class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
              data-primary="indigo-800"
            >
              {{ $t('global.signIn') }}
            </nuxt-link>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0"
          >
            <div class="relative">
              <span
                v-if="locale === 'sk'"
                class="h-6 w-6 text-blue-200 cursor-pointer"
                @click="onChangeLocale('en')"
                >SK</span
              >
              <span
                v-else
                class="h-6 w-6 text-blue-200 cursor-pointer"
                @click="onChangeLocale('sk')"
                >EN</span
              >
            </div>
            <div class="mx-4" @click="changeDark">
              <MoonIcon v-if="isDark" class="h-6 w-6 text-blue-500" />
              <SunIcon v-else class="h-6 w-6 text-blue-500" />
            </div>
            <div class="min-h-12">
              <nuxt-link
                v-if="!isAuthenticated"
                :to="localePath('/auth/login')"
                class="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto"
                data-primary="indigo-600"
              >
                {{ $t('global.signIn') }}
              </nuxt-link>

              <nuxt-link
                v-if="!isAuthenticated"
                :to="localePath('/auth/register')"
                class="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                {{ $t('global.signUp') }}
              </nuxt-link>
              <button
                v-if="isAuthenticated"
                class="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                @click="logout"
              >
                {{ $t('global.logout') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10 text-gray-100"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style="display: none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>
