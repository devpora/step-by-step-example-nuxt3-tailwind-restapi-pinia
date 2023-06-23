import {
  LoginResponse,
  RegisterResponse,
  LogoutResponse,
} from '~/types/services/AuthService'

export async function loginFromApi(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const baseBeUrl = useRuntimeConfig().public.BASE_BE_URL

  return await $fetch<LoginResponse>(`${baseBeUrl}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function loginOAuthFromApi(
  provider: string,
  oAuthCode: string,
): Promise<LoginResponse> {
  const baseBeUrl = useRuntimeConfig().public.BASE_BE_URL
  const url = `${baseBeUrl}/oauth/login`

  return await $fetch<LoginResponse>(url, {
    method: 'POST',
    body: JSON.stringify({ provider, oAuthCode }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function registerFromApi(
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
): Promise<RegisterResponse> {
  const baseBeUrl = useRuntimeConfig().public.BASE_BE_URL

  return await $fetch<RegisterResponse>(`${baseBeUrl}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function logoutFromApi(token: string): Promise<LogoutResponse> {
  const baseBeUrl = useRuntimeConfig().public.BASE_BE_URL

  return await $fetch<LogoutResponse>(`${baseBeUrl}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
