import { IUsersRepositoryDTO } from "../dtos/IUsersRepositoryDTO";

interface IUsersRepository {
    create(data: IUsersRepositoryDTO): Promise<void>;
}

export { IUsersRepository };
