export interface LoggedUser {
  access_token: string
  token_type: string
  expires_at: string
  userData: {
    id: number
    email: string
  }
}

export type User = Omit<LoggedUser, 'access_token'>
