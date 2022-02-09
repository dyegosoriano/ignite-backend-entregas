import { prisma } from '../../../../database/prismaClient'

class FindAllDeliveriesClientUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findUnique({
      select: { id: true, username: true, deliveries: true },
      where: { id: id_client }
    })

    return deliveries
  }
}

export { FindAllDeliveriesClientUseCase }
