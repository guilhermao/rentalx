import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(resquest: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();

    return response.json(allCategories);
  }
}

export { ListCategoriesController };
