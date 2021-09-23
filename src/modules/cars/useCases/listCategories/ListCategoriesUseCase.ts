import { Category } from "../../model/Categories";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.getCategories();
        return categories;
    }
}

export { ListCategoriesUseCase };
