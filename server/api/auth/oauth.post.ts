import { LoginResponse } from '~/types/services/AuthService'
import { loginOAuthFromApi } from '~/services/AuthService'

export default defineEventHandler(async (event) => {
  const { provider, oAuthCode } = await readBody<{
    provider: string
    oAuthCode: string
  }>(event)

  const data: LoginResponse = await loginOAuthFromApi(provider, oAuthCode)

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
