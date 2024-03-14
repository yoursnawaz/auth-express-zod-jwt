import { Request, Response } from "express";
import { handleLoginService } from "../services/auth.service";

export const handleLoginController = async (req: Request, res: Response) => {
  try {
    if (!req.body) res.status(400).json({ code: 400, message: "Please provide a data in request body" });
    const { email, password } = req.body;
    const response = await handleLoginService(email, password);
    res.sendStatus(200).json(response);
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({
      code: 500,
      message: err.message,
    });
  }
};
