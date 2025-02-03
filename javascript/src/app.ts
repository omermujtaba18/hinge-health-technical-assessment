// app.ts

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import bindRoutes from './routes';

const app: Application = express();

app.use(express.json());

app.use(cors({ origin: [config.appUrl] }));

app.use(helmet());

bindRoutes(app);

export default app;
