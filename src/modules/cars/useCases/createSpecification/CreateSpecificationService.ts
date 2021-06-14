import { ISpecificationsRepository } from "../../repositories/ISpecificationsReposoitory";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExist = this.specificationRepository.findByName(name);

    if (alreadyExist) {
      throw new Error("Specification already exist.");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
