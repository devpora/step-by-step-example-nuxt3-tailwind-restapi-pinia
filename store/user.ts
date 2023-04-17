import { defineStore } from 'pinia'
import { login, register, logout } from '~/services/AuthService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    isAdmin: false,
    user: {
      token: null as string | null,
      email: null as string | null,
      id: null as number | null,
    },
  }),

  getters: {
    isAuthenticated(): boolean {
      return !!this.user.token
    },
  },

  actions: {
    async login(email: string, password: string) {
      const { access_token: accessToken, userData } = await login(
        email,
        password,
      )

      this.isLoggedIn = true
      this.user.token = accessToken
      this.user.email = userData.email
      this.user.id = userData.id
      this.isAdmin = userData.id === 1
    },
    async register(
      name: string,
      email: string,
      password: string,
      passwordConfirmation: string,
    ) {
      const { access_token: accessToken, userData } = await register(
        name,
        email,
        password,
        passwordConfirmation,
      )

      this.isLoggedIn = true
      this.user.token = accessToken
      this.user.email = userData.email
      this.user.id = userData.id
    },
    async logout() {
      await logout()

      this.isLoggedIn = false
      this.isAdmin = false
      this.user.token = null
      this.user.email = null
      this.user.id = null
    },
  },
})
