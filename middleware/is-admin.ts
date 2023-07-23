export default defineNuxtRouteMiddleware((_to, _from) => {
  const isAdmin = useAdmin()

  if (!isAdmin.value) return navigateTo('/auth/login')
})
