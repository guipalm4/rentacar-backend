import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  private loadCategories(file: Express.Multer.File): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      const categories: ICategory[] = [];
      const stream = fs.createReadStream(file.path);

      const parser = csvParse();
      stream.pipe(parser);
      parser
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map((category) => {
      const { name, description } = category;

      const alreadyExist = this.categoriesRepository.findByName(name);

      if (!alreadyExist) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}
export { ImportCategoryService };
