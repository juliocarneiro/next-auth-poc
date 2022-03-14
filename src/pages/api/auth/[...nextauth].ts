import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

interface LoginProps {
  email: string
  password: string
}

const options = {
  pages: {
    signIn: '/'
  },
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {},
      async authorize({ email, password }: LoginProps) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (
      session: { jwt: string; id: number },
      user: { jwt: string; id: number }
    ) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (
      token: { jwt: string; id: number; email: string; name: string },
      user: { jwt: string; id: number; email: string; username: string }
    ) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
