import { consola } from "consola";
import { readJSON } from "../readJSON.ts";
import { spawn } from "node:child_process";

export const runbackground = async (FileName: string): Promise<void> => {
  const reads = await readJSON(FileName);
  const commandsplit = reads.run.split(/\s+/);

  const [command, ...args] = commandsplit;

  if (!command) {
    consola.error("do not run commands");
    return;
  }

  const spawncli = spawn(command, args, {
    stdio: "ignore",
    detached: true,
  });

  spawncli.on("error", (error) => {
    consola.error("failed to start processing", error);
  });

  spawncli.unref();
};
