import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../database/prismaClient'

interface IAuthenticateClient {
  password: string
  username: string
}

class AuthenticateUseCase {
  async execute({ password, username }: IAuthenticateClient): Promise<string> {
    const client = await prisma.clients.findFirst({ where: { username } })
    if (!client) throw new Error('Username or password is invalid')

    const passwordMatch = await compare(password, client.password)
    if (!passwordMatch) throw new Error('Username or password is invalid')

    const token = sign({ username }, 'Fd5ZmaQsaK8aFFtBqMI1oi', { subject: client.id, expiresIn: '1d' })

    return token
  }
}

export { AuthenticateUseCase }
