<script setup lang="ts">
import { useAuthStore } from '~/store/user'
import { getProviderUrl } from '~/utils/auth'

definePageMeta({
  middleware: ['is-guest'],
})

const email = ref('')
const password = ref('')
const error = ref<{ message: null; inputs: Record<string, string[]> }>({
  message: null,
  inputs: {},
})
const authStore = useAuthStore()

const login = async () => {
  try {
    await authStore.login(email.value, password.value)
    if (authStore.isAuthenticated) {
      error.value = {
        message: null,
        inputs: {},
      }
    }
  } catch (e: any) {
    error.value = {
      message: e.response._data.message ?? null,
      inputs: e.response._data.errors ?? {},
    }
  }
}

const signInWithProvider = (providerName: string) => {
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.BASE_URL
  const clientId =
    runtimeConfig.public[`${providerName.toUpperCase()}_CLIENT_ID`]

  window.location.href = getProviderUrl(baseUrl, providerName, clientId)
}

const user = computed(() => {
  return {
    isLoggedIn: authStore.isLoggedIn,
    isAdmin: authStore.isAdmin,
    email: authStore.user.email,
    id: authStore.user.id,
  }
})

function hasError(fieldName: string) {
  return !!(error.value && error.value.inputs && error.value.inputs[fieldName])
}
</script>

<template>
  <NuxtLayout>
    <section
      class="w-full px-8 py-16 bg-gray-100 xl:px-8 tails-selected-element"
    >
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="w-full space-y-5 md:w-3/5 md:pr-16">
            <p
              class="font-medium text-blue-500 uppercase"
              data-primary="blue-500"
            >
              Cupcake Ipsum
            </p>
            <h2
              class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl"
            >
              Store data
            </h2>
            <p
              class="text-xl md:pr-16"
              :class="{
                'text-green-600': user.isLoggedIn,
                'text-red-600': !user.isLoggedIn,
              }"
            >
              Is Logged: {{ user.isLoggedIn ? 'true' : 'false' }}
            </p>
            <p
              class="text-xl md:pr-16"
              :class="{
                'text-green-600': user.isLoggedIn,
                'text-red-600': !user.isLoggedIn,
              }"
            >
              Is Admin: {{ user.isAdmin ? 'true' : 'false' }}
            </p>
            <p class="text-xl text-gray-600 md:pr-16">User ID: {{ user.id }}</p>
            <p class="text-xl text-gray-600 md:pr-16">
              User email: {{ user.email }}
            </p>
            <h3
              class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl"
            >
              Errors from api
            </h3>
            <p class="text-xl text-gray-600 md:pr-16">
              {{ error }}
            </p>
          </div>
          <div class="w-full mt-16 md:mt-0 md:w-2/5">
            <div
              class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
              data-rounded="rounded-lg"
              data-rounded-max="rounded-full"
            >
              <h3 class="text-2xl font-medium text-center">
                {{ $t('auth.signInToAccount') }}
              </h3>
              <div class="row justify-between w-full px-4 py-4">
                <div class="flex justify-between w-full">
                  <font-awesome-icon
                    :icon="['fab', 'google']"
                    size="xl"
                    class="cursor-pointer"
                    @click="signInWithProvider('google')"
                  />
                  <font-awesome-icon
                    :icon="['fab', 'github']"
                    size="xl"
                    class="cursor-pointer"
                    @click="signInWithProvider('github')"
                  />
                  <font-awesome-icon
                    :icon="['fab', 'gitlab']"
                    size="xl"
                    class="cursor-pointer"
                    @click="signInWithProvider('gitlab')"
                  />
                </div>
              </div>
              <form @submit.prevent="login">
                <div class="pb-4">
                  <input
                    id="email"
                    v-model="email"
                    type="text"
                    name="email"
                    class="block w-full px-4 py-3 mb-2 border border-2 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    :class="{
                      'border-red-800 focus:ring focus:ring-red-500':
                        hasError('email'),
                    }"
                    data-primary="blue-500"
                    :placeholder="$t('global.emailAddress')"
                  />
                  <template v-if="hasError('email')">
                    <div
                      v-for="(e, index) in error.inputs.email"
                      :key="index"
                      class="text-red-600"
                    >
                      {{ e }}
                    </div>
                  </template>
                </div>
                <div class="pb-4">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    class="block w-full px-4 py-3 mb-2 border border-2 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    :class="{
                      'border-red-800 focus:ring focus:ring-red-500':
                        hasError('password'),
                    }"
                    data-primary="blue-500"
                    :placeholder="$t('global.password')"
                  />
                  <template v-if="hasError('password')">
                    <div
                      v-for="(e, index) in error.inputs.password"
                      :key="index"
                      class="text-red-600"
                    >
                      {{ e }}
                    </div>
                  </template>
                </div>

                <div class="block">
                  <button
                    :disabled="user.isLoggedIn"
                    type="submit"
                    class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                    :class="{ 'bg-gray-200': user.isLoggedIn }"
                  >
                    {{ $t('auth.logMeIn') }}
                  </button>
                </div>
              </form>
              <div v-if="error.message" class="text-red-600">
                {{ error.message }}
              </div>
              <p class="w-full mt-4 text-sm text-center text-gray-500">
                {{ $t('auth.dontHaveAccount') }}
                <nuxt-link to="/auth/register" class="text-blue-500 underline">
                  {{ $t('auth.signUpHere') }}
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
