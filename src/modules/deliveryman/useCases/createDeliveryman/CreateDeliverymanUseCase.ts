import { hash } from 'bcryptjs'
import { prisma } from '../../../../database/prismaClient'

interface ICreateDeliveryman {
  username: string
  password: string
}

class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    const deliverymanExist = await prisma.deliveryman.findFirst({ where: { username: { mode: 'insensitive' } } })
    if (deliverymanExist) throw new Error('Deliveryman already exist')

    const hashedPassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({ data: { username, password: hashedPassword } })

    return deliveryman
  }
}

export { CreateDeliverymanUseCase }