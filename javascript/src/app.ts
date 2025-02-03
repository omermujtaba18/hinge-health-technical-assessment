// app.ts

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';

const app: Application = express();

app.use(express.json());

app.use(cors({ origin: [config.appUrl] }));

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
