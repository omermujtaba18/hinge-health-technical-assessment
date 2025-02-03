// undefinedRoute.middleware.ts

import { Request, Response } from 'express';

export const undefinedRoute = (req: Request, res: Response) => {
  res.status(405).json({ code: 405, message: 'API route not supported' });
  return;
};
