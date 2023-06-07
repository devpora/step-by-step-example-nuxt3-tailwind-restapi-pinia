<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '~/store/user'

definePageMeta({
  middleware: ['is-guest'],
})

const authStore = useAuthStore()

onMounted(async () => {
  const router = useRouter()
  const toast = useToast()

  if (router.currentRoute.value) {
    // Check available providers
    const provider = router.currentRoute.value.params.provider
    const allowedParams = ['google', 'github', 'gitlab']
    if (!provider || !allowedParams.includes(provider)) {
      toast.warning('Provider is not allowed')
      return navigateTo('/')
    }

    const oAuthCode = router.currentRoute.value.query.code
    if (!oAuthCode) {
      if (router.currentRoute.value.query.error_message) {
        toast.warning(router.currentRoute.value.query.error_message)
      } else {
        toast.warning('Code not found')
      }
      return navigateTo('/auth/login')
    }

    try {
      await authStore.loginOauth(provider, oAuthCode)
      if (authStore.isAuthenticated) {
        toast.success('Successful login')
        return navigateTo('/user')
      }
    } catch (e: any) {
      toast.error(
        e.response === undefined ? e.message : e.response._data.errors,
      )
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
