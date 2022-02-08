import { Request, Response } from 'express'
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase'

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: id_delivery } = request.params
    const { id_deliveryman } = request

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()

    const result = await updateDeliverymanUseCase.execute({ id_deliveryman, id_delivery })

    return response.status(200).json(result)
  }
}
