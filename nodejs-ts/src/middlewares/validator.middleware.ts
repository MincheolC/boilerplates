import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          status: 'fail',
          error: err.errors,
        });
        return;
      }
      next(err);
    }
  };