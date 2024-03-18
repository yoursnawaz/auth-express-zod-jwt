import express, { NextFunction, Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/check-token", (req: Request, res: Response, next: NextFunction) => {});
