import { NextFunction, Request, Response } from 'express';
import { handleLoginService, handleSignupService } from '../services/auth.service';

export const handleSignupController = async (req: Request, res: Response) => {
  try {
    await handleSignupService(req, res);
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({
      code: 500,
      message: err.message,
    });
  }
};

export const handleLoginController = async (req: Request, res: Response) => {
  try {
    await handleLoginService(req, res);
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({
      code: 500,
      message: err.message,
    });
  }
};
