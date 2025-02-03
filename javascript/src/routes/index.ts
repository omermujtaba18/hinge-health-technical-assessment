// index.ts

import { Application, Router } from 'express';
import treeRoutes from './treeRoutes';

const bindRoutes = (app: Application) => {
  app.use('/api', Router().use('/tree', treeRoutes));
};

export default bindRoutes;
