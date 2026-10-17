import type { Command } from "gunshi";
import { startschedule } from "../../run/startscheduler.ts";
import { stopschedule } from "../../run/stopscheduler.ts";

export const runCommand: Command = {
  name: "run",
  args: {
    start: {
      type: "boolean",
      required: false,
      description: "Start scheduler",
    },
    stop: {
      type: "boolean",
      required: false,
      description: "Stop scheduler",
    },
  },

  run: async (ctx) => {
    const { start, stop } = ctx.values;

    if (start === true) {
      startschedule();
    }

    if (stop === true) {
      await stopschedule();
    }
  },
};
