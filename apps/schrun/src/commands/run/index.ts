import type { Command } from "gunshi";

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

  run: (ctx) => {
    const [start, stop] = String(ctx.values);

    if (start !== undefined) {
    }

    if (stop !== undefined) {
    }
  },
};
