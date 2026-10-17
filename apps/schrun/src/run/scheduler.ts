import cron from "node-cron";
import { spawn } from "node:child_process";
import { readJSON } from "../readJSON.ts";
import { readdir } from "node:fs/promises";
import { CONFIG_DIR } from "../constant/app.ts";

export const schedule = async (): Promise<void> => {
  const readConfig = await readdir(CONFIG_DIR);

  for (const filename of readConfig) {
    const read = await readJSON(filename);
    if (!read.enabled) continue;
    const [command, ...args] = read.run.trim().split(/\s+/);

    const crons = cron.schedule(read.cron, () => {
      const cronspawn = spawn(command!, args!, {
        stdio: "ignore",
        detached: true,
      });

      cronspawn.unref();
    });

    crons.start();
  }
};
