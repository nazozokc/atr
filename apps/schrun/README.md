# schrun

`schrun` is a small task runner for launching commands defined in JSON files. It supports running a task in the foreground or starting it as a detached background process.

## Requirements

- [Bun](https://bun.sh/)

## Installation

From the repository root, install the workspace dependencies:

```bash
bun install
```

## Configure a task

Create the configuration directory and a JSON file inside it. The file name is the task identifier passed to `schrun` (it does not need a `.json` extension).

```bash
mkdir -p ~/.config/schrun
```

For example, save the following as `~/.config/schrun/hello.json`:

```json
{
  "id": 1,
  "description": "Print a greeting",
  "run": "echo hello"
}
```

Each task file must contain:

- `id`: a number
- `description`: a string
- `run`: a command and its arguments, separated by whitespace

## Run a task

Run from the repository root:

```bash
bun run apps/schrun/src/index.ts hello.json
```

The command inherits the terminal's standard input and output, and `schrun` waits for it to finish.

To start it detached in the background:

```bash
bun run apps/schrun/src/index.ts --background hello.json
```

Background tasks have their standard input and output ignored; `schrun` returns after starting the process.

## Limitations

The `run` value is split on whitespace and launched directly, without a shell. Shell features such as pipes, redirects, variable expansion, and quoted arguments are not interpreted.
