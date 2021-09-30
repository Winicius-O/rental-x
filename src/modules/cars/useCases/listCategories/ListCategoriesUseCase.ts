import { Category } from "../../entities/Categories";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.getCategories();
        return categories;
    }
}

export { ListCategoriesUseCase };
