import { Router } from 'express';

import EnterprisesController from './app/controllers/EnterprisesController';

const routes = new Router();

routes.post('/enterprise', EnterprisesController.store);
routes.get('/enterprise', EnterprisesController.show);
routes.get('/enterprise/:id', EnterprisesController.index);
routes.put('/enterprise/:id', EnterprisesController.update);
routes.delete('/enterprise/:id', EnterprisesController.delete);

export default routes;