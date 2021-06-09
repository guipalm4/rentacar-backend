import { ListCategoriesService } from "./ListCategoriesService";
import { Response, Request } from "express";

class ListCategoriesController{

  constructor(private listCategoriesService: ListCategoriesService) {}

  handle(request: Request, response: Response) {
    
    const all = this.listCategoriesService.execute();
    return response.status(200).json(all).send();

  }

}
export { ListCategoriesController }