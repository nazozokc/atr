import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { PID_FILE } from "../constant/app.ts";

export const startschedule = async (): Promise<void> => {
  const daemonPath = fileURLToPath(new URL("../daemon.mjs", import.meta.url));

  const child = spawn(process.execPath, [daemonPath], {
    detached: true,
    stdio: "ignore",
  });

  if (child.pid === undefined) {
    throw new Error("Failed to start daemon");
  }

  await writeFile(PID_FILE, String(child.pid));
  child.unref();
};
