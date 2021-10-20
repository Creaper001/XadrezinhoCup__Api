import { Router } from "express";
import { CreateEditionController } from "./controllers/CreateEditionController";
import { SubmitRegistrationController } from "./controllers/SubmitRegistrationController";

const router = Router();

router.post("/edition", new CreateEditionController().handler);
router.post("/registration", new SubmitRegistrationController().handler);

export { router };
