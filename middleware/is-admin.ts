import { useAuthStore } from '~/store/user'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (!authStore.isAdmin) {
    return navigateTo('/auth/login')
  }
})
