import { Specification } from "../model/Specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO): void;
  findByName(name: String) : Specification;
  list(): Specification[];
}

export { ISpecificationDTO, ISpecificationsRepository };
