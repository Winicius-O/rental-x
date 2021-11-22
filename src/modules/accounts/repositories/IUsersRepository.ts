import { IUsersRepositoryDTO } from "../dtos/IUsersRepositoryDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create(data: IUsersRepositoryDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
