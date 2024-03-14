import express, { Router } from "express";
import { handleLoginController } from "../../../controllers/auth.controller";
import { validateSchema } from "../../../../utils/validateSchema";
import { LoginSchema } from "./validationSchema";

const router: Router = express.Router();

router.post("/login", validateSchema(LoginSchema), handleLoginController);

export default router;
