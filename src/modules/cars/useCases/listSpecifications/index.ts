import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsService } from "./ListSpecificationsService";

const specificationRepository = SpecificationsRepository.getInstance();
const listSpecificationsService = new ListSpecificationsService(specificationRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsService); 

export { listSpecificationsController }