import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/uploadConfig";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

userRoutes.post("/", createUserController.handle);

userRoutes.patch(
    "/avatar",
    ensureAuthentication,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { userRoutes };
