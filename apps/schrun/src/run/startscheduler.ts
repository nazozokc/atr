import { fork } from "node:child_process";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";
import { PID_FILE } from "../constant/app.ts";

export const startschedule = async (): Promise<void> => {
  const daemonPath = fileURLToPath(new URL("../daemon.mjs", import.meta.url));

  const child = fork(daemonPath, [], {
    detached: true,
    stdio: "ignore",
  });

  if (child.pid === undefined) {
    throw new Error("Failed to start daemon");
  }

  child.unref();

  await writeFile(PID_FILE, String(child.pid));
};
