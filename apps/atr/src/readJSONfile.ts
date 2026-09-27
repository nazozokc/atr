import { readFile, readdir } from "node:fs/promises";

export const readTOMLFile = (): Promise<void> => {
  const readJSONDir = readdir(ATR_ROOT_DIR);
};
