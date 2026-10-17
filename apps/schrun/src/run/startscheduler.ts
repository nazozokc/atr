import { fork } from "node:child_process";
import { open, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { PID_FILE } from "../constant/app.ts";

export const startschedule = async (): Promise<void> => {
  const daemonPath = fileURLToPath(new URL("../daemon.mjs", import.meta.url));

  const logFile = await open("/tmp/schrun-daemon.log", "a");

  const child = fork(daemonPath, [], {
    detached: true,
    stdio: ["ignore", logFile.fd, logFile.fd, "ipc"],
  });

  if (child.pid === undefined) {
    await logFile.close();
    throw new Error("Failed to start daemon");
  }

  child.on("error", (error) => {
    console.error("daemon spawn error:", error);
  });

  child.unref();
  await writeFile(PID_FILE, String(child.pid));
  await logFile.close();
};
