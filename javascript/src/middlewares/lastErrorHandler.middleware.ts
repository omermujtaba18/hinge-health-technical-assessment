// lastErrorHandler.middleware.ts

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const lastErrorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  /** In a real world, these logs would be going to Datadog, CloudWatch
   * or something similar and we would have alerts to track these errors */

  console.error(`Unhandled API error: ${error.message}`, error);
  res.status(500).json({ code: 500, message: 'Something went wrong!' });

  return;
};
