import { prisma } from '../../../../database/prismaClient'

class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliveryman.findUnique({
      select: { id: true, username: true, deliveries: true },
      where: { id: id_deliveryman }
    })

    return deliveries
  }
}

export { FindAllDeliveriesDeliverymanUseCase }
