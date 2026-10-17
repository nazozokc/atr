import cron from "node-cron";
import { spawn } from "node:child_process";
import { readJSON } from "../readJSON.ts";
import { readdir } from "node:fs/promises";
import { CONFIG_DIR } from "../constant/app.ts";
import { consola } from "consola";

export const startschedule = async (): Promise<void> => {
  const readConfig = await readdir(CONFIG_DIR);

  for (const filename of readConfig) {
    if (!filename.endsWith(".json")) continue;
    if (filename.match("pid.json")) continue;
    const [filenamesplit] = filename.split(".");
    const read = await readJSON(filenamesplit!);

    if (!read.enabled) continue;

    const [command, ...args] = read.run.trim().split(/\s+/);

    if (!command) continue;

    cron.schedule(read.cron, () => {
      const cronspawn = spawn(command!, args!, {
        detached: true,
        stdio: "inherit",
      });

      cronspawn.on("error", (error) => {
        consola.error(`コマンドの起動に失敗: ${command}`, error);
      });
    });
  }
};

startschedule().catch((error) => {
  consola.error("failed to up scheduler", error);
  process.exitCode = 1;
});
