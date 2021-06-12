import csvParse from "csv-parse";
import fs from "fs";

interface ICategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  private loadCategories(file: Express.Multer.File): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      const categories: ICategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parser = csvParse({});
      stream.pipe(parser);
      parser
        .on("data", async (line) => {
          const { name, description } = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);
  }
}
export { ImportCategoryService };
