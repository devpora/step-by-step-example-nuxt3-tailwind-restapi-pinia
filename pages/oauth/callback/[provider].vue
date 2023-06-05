<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/store/user'

definePageMeta({
  middleware: ['is-guest'],
})

const authStore = useAuthStore()

const error = ref<{ message: null; inputs: Record<string, string[]> }>({
  message: null,
  inputs: {},
})

onMounted(async () => {
  const router = useRouter()

  if (router.currentRoute.value) {
    // Check available providers
    const provider = router.currentRoute.value.params.provider
    const allowedParams = ['google', 'github', 'gitlab']
    if (!provider || !allowedParams.includes(provider)) {
      return navigateTo('/')
    }

    const oAuthCode = router.currentRoute.value.query.code
    if (!oAuthCode) {
      if (router.currentRoute.value.query.error_message) {
        alert(router.currentRoute.value.query.error_message)
      } else {
        alert('Code not found')
      }
      return navigateTo('/auth/login')
    }

    try {
      await authStore.loginOauth(provider, oAuthCode)
      if (authStore.isAuthenticated) {
        error.value = {
          message: null,
          inputs: {},
        }
        return navigateTo('/user')
      }
    } catch (e: any) {
      error.value = {
        message: e.response._data.message ?? null,
        inputs: e.response._data.errors ?? {},
      }
      alert(error.value)
      return navigateTo('/auth/login')
    }
  }
})
</script>

<template>
  <div>
    <h1>Checking</h1>
  </div>
</template>
