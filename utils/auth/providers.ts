export const providers = [
  {
    id: 'google',
    oauthUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    redirectUri: '/oauth/callback/google',
  },
  {
    id: 'github',
    oauthUrl: 'https://github.com/login/oauth/authorize',
    redirectUri: '/oauth/callback/github',
  },
  {
    id: 'gitlab',
    oauthUrl: 'https://gitlab.com/oauth/authorize',
    redirectUri: '/oauth/callback/gitlab',
  },
]
