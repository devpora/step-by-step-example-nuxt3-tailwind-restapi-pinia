import {
  LoginResponse,
  RegisterResponse,
  LogoutResponse,
} from '~/types/services/AuthService'
import { useAuthStore } from '~/store/user'

export async function login(
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

export async function loginOauth(
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

export async function register(
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
export async function logout(): Promise<LogoutResponse> {
  const baseBeUrl = useRuntimeConfig().public.BASE_BE_URL
  const authStore = useAuthStore()
  const token = authStore.user.token
  return await $fetch<LogoutResponse>(`${baseBeUrl}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
