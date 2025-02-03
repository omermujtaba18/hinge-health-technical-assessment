// index.ts

import config from './config';
import app from './app';

process.on('unhandledRejection', (error: Error) => {
  console.error(`Unhandled Promise Rejection: ${error.message}`, error);
});

app.listen(config.port, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
