import { readFile, readdir } from "node:fs/promises";
import { ATR_ROOT_DIR } from "./constant/app.ts";
import { typeJSONSchema, type typeJSON } from "./jsonType.ts";
import { consola } from "consola";

export const readJSONFile = async (): Promise<typeJSON[]> => {
  try {
    const AtrRootDir = ATR_ROOT_DIR;
    const readJSONDir = await readdir(AtrRootDir);
    const atrtasks = [];

    for (const readJSON of readJSONDir) {
      if (readJSON.endsWith(".json")) {
        const reads = await readFile(readJSON, "utf-8");
        const schema = typeJSONSchema.safeParse(JSON.parse(reads));

        if (!schema.success) {
          consola.error(schema.error);
          continue;
        }

        atrtasks.push(schema.data);
      }
    }
    return atrtasks as typeJSON[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
};
