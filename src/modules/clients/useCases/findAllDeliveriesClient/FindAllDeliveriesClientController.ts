import { Request, Response } from 'express'
import { FindAllDeliveriesClientUseCase } from './FindAllDeliveriesClientUseCase'

export class FindAllDeliveriesClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_client } = request

    const findAllDeliveriesClientUseCase = new FindAllDeliveriesClientUseCase()

    const deliveries = await findAllDeliveriesClientUseCase.execute(id_client)

    return response.status(200).json(deliveries)
  }
}
