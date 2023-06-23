export const useUser = () => {
  const authUser = useAuthUser()

  return computed(() => {
    if (!authUser.value) return false
    return authUser.value.id >= 1
  })
}
