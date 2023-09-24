import {Router} from 'express';

import accountRouter from './accounts.router';
import registerRouter from './register.router';

const urlPatterns = new Map([
  ['/accounts', accountRouter],
  ['/register', registerRouter],
]);

// eslint-disable-next-line new-cap
const v1Router = Router();
urlPatterns.forEach((router, path) => {
  v1Router.use(path, router);
});

export default v1Router;
