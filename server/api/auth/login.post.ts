import { LoginResponse } from '~/types/services/AuthService'
import { loginFromApi } from '~/services/AuthService'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<{
    email: string
    password: string
  }>(event)

  const data: LoginResponse = await loginFromApi(email, password)

  const config = useRuntimeConfig()

  const session = serialize(data)
  const signedSession = sign(session, config.private.cookieSecret)

  setCookie(event, config.private.cookieName, signedSession, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + config.cookieExpires),
  })

  return data
})
