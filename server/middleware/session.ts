export default defineEventHandler(async (event) => {
  const session = await getUserFromSession(event)
  if (session) {
    event.context.user = session.userData
    event.context.token = session.access_token
  }
})
