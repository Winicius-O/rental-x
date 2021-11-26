import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password doesn't match!", 401);
        }

        const isPasswordMatch = await compare(password, user.password);

        if (!isPasswordMatch) {
            throw new AppError("Email or password doesn't match!", 401);
        }

        const token = sign({}, "935a4f4fb6586ad4a9ade080bd964cc5", {
            subject: user.id,
            expiresIn: "1d",
        });

        const reponseToken: IResponse = {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };

        return reponseToken;
    }
}

export { AuthenticateUserUseCase };
