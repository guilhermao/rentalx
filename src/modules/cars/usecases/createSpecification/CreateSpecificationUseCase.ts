import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface ISpecificationRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ISpecificationRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findSpecificationByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists.");
    }

    this.specificationsRepository.createSpecification({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
