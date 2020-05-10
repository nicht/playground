@nicht/playground
===============

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@playground/cli.svg)](https://npmjs.org/package/@playground/cli)
[![Codecov](https://codecov.io/gh/nicht/playground/branch/master/graph/badge.svg)](https://codecov.io/gh/nicht/playground)
[![Downloads/week](https://img.shields.io/npm/dw/@playground/cli.svg)](https://npmjs.org/package/@playground/cli)
[![License](https://img.shields.io/npm/l/@playground/cli.svg)](https://github.com/nicht/playground/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @nicht/playground
$ playground COMMAND
running command...
$ playground (-v|--version|version)
@nicht/playground/0.0.1 linux-x64 node-v12.16.3
$ playground --help [COMMAND]
USAGE
  $ playground COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`playground autocomplete [SHELL]`](#playground-autocomplete-shell)
* [`playground commands`](#playground-commands)
* [`playground help [COMMAND]`](#playground-help-command)
* [`playground init`](#playground-init)
* [`playground list`](#playground-list)
* [`playground update [CHANNEL]`](#playground-update-channel)

## `playground autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ playground autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ playground autocomplete
  $ playground autocomplete bash
  $ playground autocomplete zsh
  $ playground autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `playground commands`

list all the commands

```
USAGE
  $ playground commands

OPTIONS
  -h, --help  show CLI help
  -j, --json  output in json format
  --hidden    also show hidden commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.2.3/src/commands/commands.ts)_

## `playground help [COMMAND]`

display help for playground

```
USAGE
  $ playground help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `playground init`

Command that starts a new project from existing templates.

```
USAGE
  $ playground init

OPTIONS
  -h, --help               show CLI help
  -p, --template=template  Name of the template to be initialized.

EXAMPLE
  $ playground init --template=node/api-express
  $ playground init --template node/api-express
```

_See code: [src/commands/init.ts](https://github.com/nicht/playground/blob/v0.0.1/src/commands/init.ts)_

## `playground list`

Command that will list the available templates.

```
USAGE
  $ playground list

OPTIONS
  -h, --help       show CLI help
  -t, --type=type  Template types that will be listed.

EXAMPLE
  $ playground list --type=node
  $ playground list --type node
```

_See code: [src/commands/list.ts](https://github.com/nicht/playground/blob/v0.0.1/src/commands/list.ts)_

## `playground update [CHANNEL]`

update the playground CLI

```
USAGE
  $ playground update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
