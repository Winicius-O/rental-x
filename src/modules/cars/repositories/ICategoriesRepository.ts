import { Category } from "../entities/Categories";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    getCategories(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
