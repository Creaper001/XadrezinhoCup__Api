import { Request, Response } from "express";
import { CreateEditionService } from "../services/CreateEditionService";

class CreateEditionController {
  async handler(request: Request, response: Response) {
    let { registrationsEnd } = request.body;
    const service = new CreateEditionService();
    const result = await service.execute(registrationsEnd);
    response.status(200).json(result);
  }
}

export { CreateEditionController };
