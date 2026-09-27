import { readFile, readdir } from "node:fs/promises";

export const readTOMLFile = (): Promise<void> => {
  const ReadSettingDirs = await readdir();
};
