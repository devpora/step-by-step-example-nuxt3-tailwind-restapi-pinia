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
        }
    }),

    getters: {
        isAuthenticated(): boolean {
            return !!this.user.token
        },
    },

    actions: {
        async login(email: string, password: string) {
            try {
                const { access_token, userData } = await login(email, password)

                this.isLoggedIn = true
                this.user.token = access_token
                this.user.email = userData.email
                this.user.id = userData.id
                this.isAdmin = userData.id === 1

            } catch (error) {
                throw error
            }
        },
        async register(name: string, email: string, password: string, password_confirmation: string) {
            try {
                const { access_token, userData } = await register(name, email, password, password_confirmation)

                this.isLoggedIn = true
                this.user.token = access_token
                this.user.email = userData.email
                this.user.id = userData.id

            } catch (error) {
                throw error
            }
        },
        async logout() {
            try {
                await logout()

                this.isLoggedIn = false
                this.isAdmin = false
                this.user.token = null
                this.user.email = null
                this.user.id = null

            } catch (error) {
                throw error
            }
        },
    }
})
