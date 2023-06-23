export default defineNuxtRouteMiddleware((_to, _from) => {
  const user = useAuthUser()

  if (!user.value) return navigateTo('/auth/login')
})
