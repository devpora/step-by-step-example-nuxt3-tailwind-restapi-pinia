export default defineEventHandler((event) => {
  const user = event.context.user

  if (user === undefined) {
    return null
  }
  return event.context.user
})
