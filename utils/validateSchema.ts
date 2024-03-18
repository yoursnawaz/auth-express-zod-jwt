import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export function validateSchema(schema: z.ZodType<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({
        code: 400,
        message: error.errors[0]?.message,
      });
    }
  };
}
