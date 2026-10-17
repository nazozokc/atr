import type { Command } from "gunshi";
import { startschedule } from "../../run/startscheduler.ts";
import { stopschedule } from "../../run/stopscheduler.ts";

export const runCommand: Command = {
  name: "run",
  args: {
    start: {
      type: "string",
      required: false,
      description: "Start scheduler",
    },
    stop: {
      type: "string",
      required: false,
      description: "Stop scheduler",
    },
  },

  run: async (ctx) => {
    const [start, stop] = String(ctx.values);

    if (start !== undefined) {
      await startschedule();
    }

    if (stop !== undefined) {
      await stopschedule();
    }
  },
};
