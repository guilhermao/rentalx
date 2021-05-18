import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategoryRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICategoryRequest): void {
    const categoryAlreadyExists =
      this.categoriesRepository.findCategoryByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists.");
    }

    this.categoriesRepository.createCategory({ name, description });
  }
}

export { CreateCategoryUseCase };
