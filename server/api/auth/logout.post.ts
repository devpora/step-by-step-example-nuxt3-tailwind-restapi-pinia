import { logoutFromApi } from '~/services/AuthService'

export default defineEventHandler(async (event) => {
  const token = event.context.token

  await logoutFromApi(token)
  const config = useRuntimeConfig()

  deleteCookie(event, config.private.cookieName, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })

  return null
})
