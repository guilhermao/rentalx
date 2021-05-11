import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  createSpecification({ name, description }: ICreateSpecificationDTO): void;
  findSpecificationByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
