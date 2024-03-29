import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { importCategoryController } from "../modules/cars/usecases/importCategory";
import { listCategoriesController } from "../modules/cars/usecases/listCategories";

const categoriesRoutes = Router();
const fileUpload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  "/import",
  fileUpload.single("file"),
  (request, response) => {
    return importCategoryController.handle(request, response);
  }
);

export { categoriesRoutes };
