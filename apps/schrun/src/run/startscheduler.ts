import { fork } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { PID_FILE } from "../constant/app.ts";

export const startschedule = async (): Promise<void> => {
  const daemonPath = join(process.execPath, "daemon.mjs");

  const child = fork(daemonPath, [], {
    detached: true,
    stdio: "ignore",
  });

  if (child.pid === undefined) {
    throw new Error("Failed to start daemon");
  }

  child.on("error", (error) => {
    console.error("daemon spawn error:", error);
  });

  child.unref();
  await writeFile(PID_FILE, String(child.pid));
};
