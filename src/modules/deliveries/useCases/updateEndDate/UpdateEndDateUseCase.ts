import { prisma } from '../../../../database/prismaClient'

interface IRequest {
  id_deliveryman: string
  id_delivery: string
}

class UpdateEndDateUseCase {
  async execute({ id_deliveryman, id_delivery }: IRequest) {
    const result = await prisma.deliveries.updateMany({
      where: { id: id_delivery, id_deliveryman },
      data: { end_at: new Date() }
    })

    return result
  }
}

export { UpdateEndDateUseCase }
