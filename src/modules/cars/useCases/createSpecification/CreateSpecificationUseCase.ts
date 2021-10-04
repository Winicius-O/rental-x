import { inject, injectable } from "tsyringe";
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
            throw new Error("name already used.");
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
