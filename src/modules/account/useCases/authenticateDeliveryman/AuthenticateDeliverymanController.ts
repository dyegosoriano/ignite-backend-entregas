import { Request, Response } from 'express'
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase'

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()

    const token = await authenticateDeliverymanUseCase.execute({ password, username })

    return response.status(200).json({ token })
  }
}
