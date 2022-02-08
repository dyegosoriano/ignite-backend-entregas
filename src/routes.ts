import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailableUseCase/FindAllAvailableController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const findAllAvailableController = new FindAllAvailableController()
const createDeliveryController = new CreateDeliveryController()
const createClientController = new CreateClientController()

const routes = Router()

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/client', createClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)

export { routes }
