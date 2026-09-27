import { consola } from "consola";
import { readJSONFile } from "./readJSONfile";

export const run = async (): Promise<void> => {
  const reads = readJSONFile();
};
