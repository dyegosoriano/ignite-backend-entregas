import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const createDeliverymanController = new CreateDeliverymanController()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const routes = Router()

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/authenticate', authenticateClientController.handle)
routes.post('/client', createClientController.handle)

export { routes }
