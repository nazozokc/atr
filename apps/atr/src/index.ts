#!/usr/bin/env node

import { cli, define } from "gunshi";
import { version } from "./version.ts";
import { isToken } from "typescript/unstable/ast";

const mainCommand = define({
  name: "atr",
  description: "A CLI for managing your life",
  version: await version(),
  args: {
    default: {
      type: "positional",
      required: false,
    },

    surface: {
      type: "positional",
      required: false,
    },

    background: {
      type: "string",
      required: false,
    },
  },

  async run: (ctx) => {},
});

await cli(process.argv.slice(2), mainCommand, {});
