import express, { Router } from "express";
import auth from "./api/auth/auth.route";
const router: Router = express.Router();

router.use("/auth", auth);

export default router;
