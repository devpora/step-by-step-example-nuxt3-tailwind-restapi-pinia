export default defineNuxtRouteMiddleware((_to, _from) => {
  const user = useAuthUser()

  if (user.value) {
    if (process.server) return navigateTo('/')

    return abortNavigation()
  }
})
