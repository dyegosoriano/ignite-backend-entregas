import { prisma } from '../../../../database/prismaClient'

interface IRequest {
  id_deliveryman: string
  id_delivery: string
}

class UpdateDeliverymanUseCase {
  async execute({ id_deliveryman, id_delivery }: IRequest) {
    const result = await prisma.deliveries.update({ where: { id: id_delivery }, data: { id_deliveryman } })

    return result
  }
}

export { UpdateDeliverymanUseCase }
