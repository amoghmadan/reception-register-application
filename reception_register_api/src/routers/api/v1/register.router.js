import {Router} from 'express';

import {
  registerCreateEntryController,
  registerDestroyEntryController,
  registerListEntryController,
  registerPartialUpdateEntryController,
  registerRetrieveEntryController,
  registerUpdateEntryController,
} from '../../../controllers';
import {authenticate} from '../../../middlewares';

// eslint-disable-next-line new-cap
const registerRouter = Router();
registerRouter.use(authenticate);
registerRouter
    .route('/entries')
    .get(registerListEntryController)
    .post(registerCreateEntryController);
registerRouter
    .route('/entries/:id')
    .get(registerRetrieveEntryController)
    .put(registerUpdateEntryController)
    .patch(registerPartialUpdateEntryController)
    .delete(registerDestroyEntryController);

export default registerRouter;
