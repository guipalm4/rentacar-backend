import { Response, Request } from "express";

import { ListSpecificationsService } from "./ListSpecificationsService";

class ListSpecificationsController {
  constructor(private listSpecificationsService: ListSpecificationsService) {}

  handle(request: Request, response: Response) {
    const all = this.listSpecificationsService.execute();
    return response.status(200).json(all).send();
  }
}
export { ListSpecificationsController };
