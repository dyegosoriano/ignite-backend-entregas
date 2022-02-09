import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController'
import { FindAllDeliveriesClientController } from './modules/clients/useCases/findAllDeliveriesClient/FindAllDeliveriesClientController'
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const findAllDeliveriesClientController = new FindAllDeliveriesClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllAvailableController = new FindAllAvailableController()
const createDeliveryController = new CreateDeliveryController()
const createClientController = new CreateClientController()

const routes = Router()

routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/client', createClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.put('/delivery/update-deliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)

export { routes }
