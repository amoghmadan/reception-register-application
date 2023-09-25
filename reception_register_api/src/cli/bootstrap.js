import {Server} from 'http';

import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';

import urlPatterns from '../routers';
import {MONGODB_URI} from '../settings';

/**
 * Create Request Listener.
 * @return {express.Application}
 */
export function getRequestListener() {
  const application = express();
  application.use(helmet());
  application.use(express.urlencoded({extended: true}));
  application.use(express.json());
  application.use(morgan('combined'));

  urlPatterns.forEach((router, path) => {
    application.use(path, router);
  });

  return application;
}

/**
 * Bootstraps the application.
 * @param {Number} port
 * @param {String} host
 */
export default async function bootstrap(port, host) {
  const requestListener = getRequestListener();

  const options = {};
  const server = new Server(options, requestListener);

  await mongoose.connect(MONGODB_URI);
  server.listen(port, host, () => {
    console.info(server.address());
  });
}
