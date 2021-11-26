import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepository
    ) {}

    async execute({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const isNameValid = await this.specificationRepository.findByName(name);

        if (isNameValid) {
            throw new AppError("name already used.", 400);
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
