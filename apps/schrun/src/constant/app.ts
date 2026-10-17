import { join } from "node:path";
import { homedir } from "node:os";

export const CLI_COMMAND_NAME = "schrun";
export const CONFIG_DIR = join(`${homedir()}`, ".config", "schrun");
export const PID_FILE = join(`${homedir()}`, ".config", "schrun", "pid.json");
