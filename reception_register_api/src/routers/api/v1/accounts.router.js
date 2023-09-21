import {Router} from 'express';

import {
  accountDetailController,
  accountLoginController,
  accountLogoutController,
} from '../../../controllers';
import {authenticate} from '../../../middlewares';

// eslint-disable-next-line new-cap
const accountRouter = Router();
accountRouter.route('/login').post(accountLoginController);
accountRouter.route('/detail').get(authenticate, accountDetailController);
accountRouter.route('/logout').delete(authenticate, accountLogoutController);

export default accountRouter;
