// app.ts

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import bindRoutes from './routes';
import * as middleware from './middlewares';

const app: Application = express();

app.use(express.json());

app.use(cors({ origin: [config.appUrl] }));

app.use(helmet());

bindRoutes(app);

app.use(middleware.undefinedRoute);
app.use(middleware.lastErrorHandler);

export default app;
