import { useAuthStore } from '~/store/user'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (authStore.isLoggedIn) {
    return navigateTo('/')
  }
})
