import { join } from "node:path";
import { homedir } from "node:os";

export const CLI_COMMAND_NAME = "atr";
export const CONFIG_DIR = join(`${homedir()}`, ".config", "atr");
