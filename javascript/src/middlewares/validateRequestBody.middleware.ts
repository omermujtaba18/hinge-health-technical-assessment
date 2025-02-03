// validateRequestBody.middleware.ts

import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export const validateRequestBody =
  (querySchema: yup.ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await querySchema.validate(req.body);
      return next();
    } catch (error: any) {
      res.status(400).json({
        code: 400,
        message: error.message,
      });

      return;
    }
  };
