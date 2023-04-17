<script setup lang="ts">
import { useAuthStore } from '~/store/user'
definePageMeta({
  middleware: ['is-user'],
})

const authStore = useAuthStore()
const user = computed(() => {
  return {
    isLoggedIn: authStore.isLoggedIn,
    email: authStore.user.email,
    id: authStore.user.id,
  }
})
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-extralight text-yellow-500 mb-4">Logged?</h1>
      <h2 class="text-3xl font-light text-red-600 mb-4">
        {{ user.isLoggedIn ? 'true' : 'false' }}
      </h2>
      <h3 class="text-3xl font-bold underline text-green-400 mb-4">Email</h3>
      <h4 class="text-3xl font-extrabold underline text-gray-500 mb-4">
        {{ user.email }}
      </h4>
    </div>
  </NuxtLayout>
</template>
