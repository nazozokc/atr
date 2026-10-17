import { spawn } from "node:child_process";

export const startschedule = (): void => {
  const child = spawn(process.execPath, ["./dist/daemon.mjs", "scheduler"], {
    detached: true,
    stdio: "ignore",
  });

  child.unref();
};
