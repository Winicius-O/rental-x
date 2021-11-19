import { getRepository, Repository } from "typeorm";
import { IUserRepositoryDTO } from "../../dtos/IUserRepositoryDTO";
import { IUserRepository } from "../IUserRepository";
import { User } from "../../entities/User";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        username,
        password,
        email,
        driver_license,
    }: IUserRepositoryDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            password,
            email,
            driver_license,
        });

        await this.repository.save(user);
    }
}

export { UserRepository };
