import { inject, injectable } from "tsyringe";

import { IUsersRepositoryDTO } from "../../dtos/IUsersRepositoryDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        username,
        email,
        password,
        driver_license,
    }: IUsersRepositoryDTO): Promise<void> {
        this.usersRepository.create({
            name,
            username,
            email,
            password,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
