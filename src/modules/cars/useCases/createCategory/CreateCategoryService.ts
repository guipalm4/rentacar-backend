import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlredyExist = this.categoriesRepository.findByName(name);

    if (categoryAlredyExist) {
      throw new Error("Category already exist.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
