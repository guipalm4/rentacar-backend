import { Response, Request } from "express";

import { ListCategoriesService } from "./ListCategoriesService";

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  handle(request: Request, response: Response) {
    const all = this.listCategoriesService.execute();
    return response.status(200).json(all).send();
  }
}
export { ListCategoriesController };
