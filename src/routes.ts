import { Router } from 'express'
import { AuthenticateController } from './modules/account/useCases/AuthenticateController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'

const createClientController = new CreateClientController()
const authenticateController = new AuthenticateController()

const routes = Router()

routes.post('/authenticate', authenticateController.handle)
routes.post('/client', createClientController.handle)

export { routes }
