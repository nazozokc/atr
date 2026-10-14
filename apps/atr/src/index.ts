#!/usr/bin/env node

import { cli, define } from "gunshi";
import { version } from "./version.ts";
import { runbackground } from "./run/background.ts";
import { runsurface } from "./run/surface.ts";

const mainCommand = define({
  name: "atr",
  description: "agent and other task runner",
  version: await version(),

  args: {
    defaultInput: {
      type: "positional",
      required: true,
      description: "Input value",
    },

    background: {
      type: "string",
      required: false,
      description: "Run a task in the background",
    },
  },

  run: async (ctx) => {
    const { defaultInput, background } = ctx.values;

    if (background !== undefined) {
      console.log("Background mode:", background);
      await runbackground(background);
      return;
    }

    if (defaultInput !== undefined) {
      console.log("Normal mode:", defaultInput);
      await runsurface(defaultInput);
      return;
    }
  },
});

await cli(process.argv.slice(2), mainCommand, {});
