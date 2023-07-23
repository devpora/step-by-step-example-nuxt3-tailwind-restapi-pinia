import { RegisterResponse } from '~/types/services/AuthService'
import { registerFromApi } from '~/services/AuthService'

export default defineEventHandler(async (event) => {
  const { name, email, password, passwordConfirmation } = await readBody<{
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }>(event)

  const data: RegisterResponse = await registerFromApi(
    name,
    email,
    password,
    passwordConfirmation,
  )

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
