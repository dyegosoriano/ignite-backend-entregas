import { Request, Response } from 'express'
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase'

export class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body

    const authenticateUseCase = new AuthenticateClientUseCase()

    const token = await authenticateUseCase.execute({ password, username })

    return response.status(200).json({ token })
  }
}
