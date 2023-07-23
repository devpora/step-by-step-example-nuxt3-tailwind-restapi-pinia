<script setup lang="ts">
const loggedUser = useAuthUser()

definePageMeta({
  middleware: ['is-user'],
})
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-extralight text-yellow-500 mb-4">Logged?</h1>
      <h2 class="text-3xl font-light text-red-600 mb-4">
        {{ loggedUser ? 'true' : 'false' }}
      </h2>
      <h3 class="text-3xl font-bold underline text-green-400 mb-4">Email</h3>
      <h4 class="text-3xl font-extrabold underline text-gray-500 mb-4">
        loggedUser: {{ loggedUser }}<br />
        loggedUser.email: {{ loggedUser.email }}<br />
      </h4>
    </div>
  </NuxtLayout>
</template>
