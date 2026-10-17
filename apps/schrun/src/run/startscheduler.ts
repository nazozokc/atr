import { spawn } from "node:child_process";

const child = spawn(process.execPath, ["./dist/index.mjs", "scheduler"], {
  detached: true,
  stdio: "ignore",
});

child.unref();
