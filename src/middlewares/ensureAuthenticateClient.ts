import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> {
  const { authorization } = request.headers
  if (!authorization) return response.status(401).json({ message: 'Authorization header is required' })

  const [, token] = authorization.split(' ')
  if (!token) return response.status(401).json({ message: 'Token is required' })

  try {
    const { sub } = verify(token, 'Fd5ZmaQsaK8aFFtBqMI1oi') as IPayload

    request.id_client = sub

    return next()
  } catch {
    return response.status(401).json({ message: 'Token is invalid' })
  }
}
