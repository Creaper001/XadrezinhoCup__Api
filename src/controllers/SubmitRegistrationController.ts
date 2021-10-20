import { Request, Response } from "express";
import { SubmitRegistrationService } from "../services/SubmitRegistrationService";

class SubmitRegistrationController {
  async handler(request: Request, response: Response) {
    const { fullName, email, cellphone, lichessName, allowsNotifications } =
      request.body;
    const service = new SubmitRegistrationService();
    const result = await service.execute(
      fullName,
      email,
      cellphone,
      lichessName,
      allowsNotifications
    );
    response.status(200).json(result);
  }
}

export { SubmitRegistrationController };
