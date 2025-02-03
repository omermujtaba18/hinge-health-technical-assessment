// index.ts

import { IConfig } from '../interfaces';

const config: IConfig = {
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT as string, 10) || 3001,
  appUrl: process.env.APP_URL || 'http://localhost:3001',
};

export default config;
