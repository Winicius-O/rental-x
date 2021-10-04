import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

const categorieRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categorieRoutes.post("/", createCategoryController.handle);

categorieRoutes.get("/", listCategoriesController.handle);

categorieRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categorieRoutes };
