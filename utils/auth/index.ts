import { providers } from './providers'

export function getProviderUrl(
  baseUrl: string,
  providerId: string,
  clientId: string,
  challenge: string | null,
) {
  const provider = providers.find((provider) => provider.id === providerId)
  let url = ''

  if (provider?.id === 'google') {
    url = `${provider.oauthUrl}?client_id=${clientId}&redirect_uri=${baseUrl}${provider.redirectUri}&response_type=code&scope=openid%20email%20profile`
  } else if (provider?.id === 'github') {
    url = `${provider.oauthUrl}?client_id=${clientId}&redirect_uri=${baseUrl}${provider.redirectUri}&scope=read:user,user:email`
  } else if (provider?.id === 'gitlab') {
    url = `${provider.oauthUrl}?client_id=${clientId}&redirect_uri=${baseUrl}${provider.redirectUri}&response_type=code&scope=read_user&code_challenge=${challenge}&code_challenge_method=S256`
  }

  return url
}
