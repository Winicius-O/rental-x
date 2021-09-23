import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationsRepository) {}

    execute({ name, description }: ICreateSpecificationDTO): void {
        const isNameValid = this.specificationRepository.findByName(name);

        if (isNameValid) {
            throw new Error("name already used.");
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
