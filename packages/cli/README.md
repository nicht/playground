@playground/cli
===============

a

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
$ npm install -g @playground/cli
$ playground COMMAND
running command...
$ playground (-v|--version|version)
@playground/cli/0.0.0 linux-x64 node-v12.16.3
$ playground --help [COMMAND]
USAGE
  $ playground COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`playground hello [FILE]`](#playground-hello-file)
* [`playground help [COMMAND]`](#playground-help-command)

## `playground hello [FILE]`

describe the command here

```
USAGE
  $ playground hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ playground hello
  hello world from ./src/init.ts!
```

_See code: [src/commands/init.ts](https://github.com/nicht/playground/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
