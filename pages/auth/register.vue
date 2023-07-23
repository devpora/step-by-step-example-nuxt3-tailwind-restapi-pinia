<script setup lang="ts">
import { useToast } from 'vue-toastification'

definePageMeta({
  middleware: ['is-guest'],
})

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const error = ref<{ message: null; inputs: Record<string, string[]> }>({
  message: null,
  inputs: {},
})

const { register } = useAuth()
const loggedUser = useAuthUser()
const isAdmin = useAdmin()
async function sendRegister() {
  const toast = useToast()
  try {
    await register(
      name.value,
      email.value,
      password.value,
      passwordConfirmation.value,
    )
    toast.success('Register Successful')
    error.value = {
      message: null,
      inputs: {},
    }
  } catch (e: any) {
    error.value = {
      message: e.response._data.data.message ?? null,
      inputs: e.response._data.data.errors ?? {},
    }
    toast.error(
      e.response._data.data.message === undefined
        ? e.message
        : e.response._data.data.message,
    )
  }
}

function hasError(fieldName: string) {
  return !!(error.value && error.value.inputs && error.value.inputs[fieldName])
}
</script>
<template>
  <NuxtLayout>
    <section class="w-full bg-white tails-selected-element">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
          <div
            class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100"
          >
            <div
              class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0"
            >
              <div
                class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl"
              >
                <div class="relative">
                  <p class="mb-2 font-medium text-gray-700 uppercase">
                    Cupcake Ipsum
                  </p>
                  <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">
                    Cupcake ipsum dolor sit amet biscuit...
                  </h2>
                </div>
                <p
                  class="text-xl md:pr-16"
                  :class="{
                    'text-green-600': loggedUser,
                    'text-red-600': !loggedUser,
                  }"
                >
                  Is Logged: {{ loggedUser ? 'true' : 'false' }}
                </p>
                <p
                  class="text-xl md:pr-16"
                  :class="{
                    'text-green-600': loggedUser,
                    'text-red-600': !loggedUser,
                  }"
                >
                  Is Admin: {{ isAdmin ? 'true' : 'false' }}
                </p>
                <p class="text-xl text-gray-600 md:pr-16">
                  User data: {{ loggedUser }}
                </p>
                <p class="text-xl text-gray-600 md:pr-16">
                  User ID: {{ loggedUser.id }}
                </p>
                <p class="text-xl text-gray-600 md:pr-16">
                  User email: {{ loggedUser.email }}
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
            </div>
          </div>

          <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div
              class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24"
            >
              <h4 class="w-full text-3xl font-bold">
                {{ $t('global.signUp') }}
              </h4>
              <p class="text-lg text-gray-500">
                {{ $t('auth.ifYouHaveAnAccount') }}
                <nuxt-link
                  :to="localePath('/auth/login')"
                  class="text-blue-600 underline lowercase"
                  data-primary="blue-600"
                >
                  {{ $t('global.signIn') }}
                </nuxt-link>
              </p>
              <div class="relative w-full mt-10 space-y-8">
                <form @submit.prevent="sendRegister">
                  <div class="pb-4">
                    <input
                      id="name"
                      v-model="name"
                      type="text"
                      name="name"
                      class="block w-full px-4 py-3 mb-2 border border-2 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                      :class="{
                        'border-red-800 focus:ring focus:ring-red-500':
                          hasError('name'),
                      }"
                      data-primary="blue-500"
                      :placeholder="$t('global.name')"
                    />
                    <template v-if="hasError('name')">
                      <div
                        v-for="(e, index) in error.inputs.name"
                        :key="index"
                        class="text-red-600"
                      >
                        {{ e }}
                      </div>
                    </template>
                  </div>
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
                  <div class="pb-4">
                    <input
                      id="passwordConfirmation"
                      v-model="passwordConfirmation"
                      type="password"
                      name="passwordConfirmation"
                      class="block w-full px-4 py-3 mb-2 border border-2 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                      :class="{
                        'border-red-800 focus:ring focus:ring-red-500':
                          hasError('password_confirmation'),
                      }"
                      data-primary="blue-500"
                      :placeholder="$t('global.passwordConfirmation')"
                    />
                    <template v-if="hasError('password_confirmation')">
                      <div
                        v-for="(e, index) in error.inputs.password_confirmation"
                        :key="index"
                        class="text-red-600"
                      >
                        {{ e }}
                      </div>
                    </template>
                  </div>
                  <div class="block">
                    <button
                      type="submit"
                      class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                      :class="{ 'bg-gray-200': loggedUser }"
                    >
                      {{ $t('auth.createAccount') }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
