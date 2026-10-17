import { cli, define } from "gunshi";
import { version } from "../../version.ts";
import { runbackground } from "../../run/background.ts";
import { runsurface } from "../../run/surface.ts";
import { consola } from "consola";
import { CLI_COMMAND_NAME } from "../../constant/app.ts";
import { runCommand } from "../run/index.ts";

export const mainCommand = async (): Promise<void> => {
  const RunmainCommand = define({
    name: CLI_COMMAND_NAME,
    description: "agent and other task runner",
    version: await version(),

    args: {
      surface: {
        type: "string",
        required: false,
        description: "Input value",
      },

      background: {
        type: "string",
        required: false,
        description: "Run a task in the background",
      },
    },

    run: async (ctx) => {
      const { surface, background } = ctx.values;

      if (background !== undefined) {
        console.log("Background mode:", background);
        await runbackground(background);
        return;
      }

      if (surface !== undefined) {
        console.log("Normal mode:", surface);
        await runsurface(surface);
        return;
      }

      consola.error("No Input String");
      return;
    },
  });

  await cli(process.argv.slice(2), RunmainCommand, {
    name: CLI_COMMAND_NAME,
    subCommands: {
      run: runCommand,
    },
  });
};
