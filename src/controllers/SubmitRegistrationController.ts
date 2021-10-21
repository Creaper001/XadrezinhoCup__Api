import { Request, Response } from "express";
import { SubmitRegistrationService } from "../services/SubmitRegistrationService";

class SubmitRegistrationController {
  async handler(request: Request, response: Response) {
    const { fullName, email, cellphone, lichessName, allowsNotifications } =
      request.body;
    const service = new SubmitRegistrationService();
    const allowsNotificationsBoolean = allowsNotifications === "true";
    const result = await service.execute(
      fullName,
      email,
      cellphone,
      lichessName,
      allowsNotificationsBoolean
    );
    response.status(200).json(result);
  }
}

export { SubmitRegistrationController };
