import multer from "multer";
import { resolve } from "path";
import { v4 as uuidV4 } from "uuid";

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const fileUniqueString = uuidV4();
                    const fileName = `${fileUniqueString}-${file.originalname}`;

                    return callback(null, fileName);
                },
            }),
        };
    },
};
