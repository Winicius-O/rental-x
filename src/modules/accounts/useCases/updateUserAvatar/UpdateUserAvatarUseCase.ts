import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    id: string;
    avatarPath: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ id, avatarPath }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(id);

        user.avatar = avatarPath;

        this.usersRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
