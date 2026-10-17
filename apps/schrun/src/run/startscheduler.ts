import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { PID_FILE } from "../constant/app";

export const startschedule = async (): Promise<void> => {
  const child = spawn(process.execPath, ["node", "./dist/daemon.mjs"], {
    detached: true,
    stdio: "ignore",
  });

  await writeFile(PID_FILE, String(process.pid));
  child.unref();
};
