import { Router } from "express";
import { CreateEditionController } from "./controllers/CreateEditionController";
import { SubmitRegistrationController } from "./controllers/SubmitRegistrationController";

const router = Router();

router.get("/", (req, res) => {
    res.send("🚀 API is running!")
});

router.post("/edition", new CreateEditionController().handler);
router.post("/registration", new SubmitRegistrationController().handler);

export { router };
