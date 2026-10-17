import { readFile, unlink } from "node:fs/promises";
import { PID_FILE } from "../constant/app.ts";
import { consola } from "consola";

export const stopschedule = async (): Promise<void> => {
  let pid: number;

  try {
    pid = Number(await readFile(PID_FILE, "utf-8"));
  } catch {
    consola.warn("no look schedule pid file");
    return;
  }

  if (!Number.isSafeInteger(pid) || pid <= 0) {
    consola.error("warning pid files");
    return;
  }

  try {
    process.kill(pid, "SIGTERM");
    consola.success("send stop to scheduler");
  } catch (error) {
    consola.error("failed stop to scheduler", error);
    return;
  }

  await unlink(PID_FILE);
};
