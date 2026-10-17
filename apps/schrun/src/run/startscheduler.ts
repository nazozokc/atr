import { fork } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { PID_FILE } from "../constant/app.ts";
import { fileURLToPath } from "node:url";

export const startschedule = async (): Promise<void> => {
  const daemonPath = fileURLToPath(
    new URL("./dist/daemon.mjs", import.meta.url),
  );

  const child = fork(process.execPath, [daemonPath], {
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
