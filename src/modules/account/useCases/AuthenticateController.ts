import { Request, Response } from 'express'
import { AuthenticateUseCase } from './AuthenticateUseCase'

export class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body

    const authenticateUseCase = new AuthenticateUseCase()

    const token = await authenticateUseCase.execute({ password, username })

    return response.status(200).json({ token })
  }
}
