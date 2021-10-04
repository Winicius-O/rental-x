import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecification/ListSpecificationsController";

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationsController();

const specificationRoutes = Router();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationController.handle);

export { specificationRoutes };
