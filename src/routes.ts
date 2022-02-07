import { Router } from 'express'
import { AuthenticateController } from './modules/account/useCases/AuthenticateController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const createDeliverymanController = new CreateDeliverymanController()
const createClientController = new CreateClientController()
const authenticateController = new AuthenticateController()

const routes = Router()

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/authenticate', authenticateController.handle)
routes.post('/client', createClientController.handle)

export { routes }
