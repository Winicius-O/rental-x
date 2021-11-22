import { Router } from "express";

import { categorieRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categorieRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);

export { router };
