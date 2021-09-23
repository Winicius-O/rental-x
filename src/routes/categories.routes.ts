import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categorieRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

categorieRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categorieRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categorieRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categorieRoutes };
