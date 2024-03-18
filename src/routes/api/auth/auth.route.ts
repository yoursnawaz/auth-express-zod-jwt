import express, { Router } from "express";
import { handleLoginController, handleSignupController } from "../../../controllers/auth.controller";
import { validateSchema } from "../../../../utils/validateSchema";
import { LoginSchema, SignupSchema } from "./auth.validation";

const router: Router = express.Router();

router.post("/signup", validateSchema(SignupSchema), handleSignupController);
router.post("/login", validateSchema(LoginSchema), handleLoginController);

export default router;
