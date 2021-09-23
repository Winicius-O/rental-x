import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const foundCategory = this.categoriesRepository.findByName(name);
        if (foundCategory) {
            throw new Error("Category already exists.");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
