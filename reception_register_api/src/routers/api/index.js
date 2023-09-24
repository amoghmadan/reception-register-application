import {Router} from 'express';

import v1Router from './v1';

const urlPatterns = new Map([
  ['/v1', v1Router],
]);

// eslint-disable-next-line new-cap
const apiRouter = Router();
urlPatterns.forEach((router, path) => {
  apiRouter.use(path, router);
});

export default apiRouter;
