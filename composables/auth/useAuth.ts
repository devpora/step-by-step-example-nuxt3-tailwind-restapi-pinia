import { useAuthUser } from './useAuthUser'

export const useAuth = () => {
  const authUser = useAuthUser()

  const setUser = (user: any) => {
    authUser.value = user
  }

  const setCookie = (cookie: any) => {
    cookie.value = cookie
  }

  const login = async (email: string, password: string) => {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email,
        password,
      },
    })

    setUser(data.userData)

    return authUser
  }

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    const data = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        name,
        email,
        password,
        passwordConfirmation,
      },
    })

    setUser(data.userData)
  }

  const loginOAuth = async (provider: string, oAuthCode: string) => {
    const data = await $fetch('/api/auth/oauth', {
      method: 'POST',
      body: {
        provider,
        oAuthCode,
      },
    })

    setUser(data.userData)

    return authUser
  }

  const logout = async () => {
    const data = await $fetch('/api/auth/logout', {
      method: 'POST',
    })

    setUser(data)
  }

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch('/api/auth/me', {
          method: 'GET',
          headers: useRequestHeaders(['cookie']) as HeadersInit,
        })
        setUser(data)
      } catch (error) {
        setCookie(null)
      }
    }

    return authUser
  }

  return {
    login,
    loginOAuth,
    register,
    logout,
    me,
  }
}
