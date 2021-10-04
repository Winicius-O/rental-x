import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Categories";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.getCategories();
        return categories;
    }
}

export { ListCategoriesUseCase };
