import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../../database/prismaClient'

interface IAuthenticateClient {
  password: string
  username: string
}

class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IAuthenticateClient): Promise<string> {
    const deliveryman = await prisma.deliveryman.findFirst({ where: { username } })
    if (!deliveryman) throw new Error('Username or password is invalid')

    const passwordMatch = await compare(password, deliveryman.password)
    if (!passwordMatch) throw new Error('Username or password is invalid')

    const token = sign({ username }, 'Fd5ZmaQsaK8a99tBqMI1oi', { subject: deliveryman.id, expiresIn: '1d' })

    return token
  }
}

export { AuthenticateDeliverymanUseCase }
