import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function ensureAuthentication(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const rawToken = request.headers.authorization;

    if (!rawToken) {
        throw new AppError("Token is missing", 400);
    }

    const [, token] = rawToken.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "935a4f4fb6586ad4a9ade080bd964cc5"
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists", 404);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Invalid token", 400);
    }
}
