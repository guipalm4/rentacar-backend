import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsReposoitory";

class ListSpecificationsService {

  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute() : Specification [] {
    return this.specificationRepository.list()
  }
  
}

export { ListSpecificationsService }