import { Specification } from "../../model/Specification";
import { ISpecificationDTO, ISpecificationsRepository } from 
"../ISpecificationsReposoitory"

class SpecificationsRepository implements ISpecificationsRepository {
  
  private specifications: Specification[];

  private static INSTANCE : SpecificationsRepository;

  public static getInstance() : SpecificationsRepository {

    if(!this.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository();
    }
    return this.INSTANCE;
  }

  private constructor() {
    this.specifications = [];
  }
  list(): Specification[] {
    return this.specifications;
  }
  
  create({ name, description }: ISpecificationDTO): void {

    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );
    return specification;
  }
  
}

export { SpecificationsRepository }

