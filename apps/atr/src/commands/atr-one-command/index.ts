import type { Command } from "gunshi";
import { run } from "./run.ts";

export const taskCommand: Command = {
  name: "task",
  description: "Manage tasks",
  run: run,
};
