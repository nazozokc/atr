import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CONFIG_DIR } from "./constant/app";
import { fileSchema, type FileType } from "./type";
import { consola } from "consola";

export const readJSON = async (FileName: string): Promise<FileType> => {
  const file = join(CONFIG_DIR, `${FileName}`);
  const reads = await readFile(file, "utf-8");

  const safeParseSchema = fileSchema.safeParse(JSON.parse(reads));

  if (!safeParseSchema.success) {
    throw consola.error(safeParseSchema.error);
  }

  return safeParseSchema.data as FileType;
};
