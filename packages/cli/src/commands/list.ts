import {Command, flags} from '@oclif/command'
import {join} from 'path'
import IO from '../core/io'

export default class List extends Command {
  static description = 'Command that will list the available templates.'

  static examples = [
    `$ playground list --type=node
$ playground list --type node
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    type: flags.string({char: 't', description: 'Template types that will be listed.'}),
  }

  async run() {
    const io = new IO()
    const {flags} = this.parse(List)

    const type = flags.type || ''

    const configurationFile = await io.readConfiguration()

    const directoryToList = join(configurationFile.templates.path, type)

    this.log(`Available templates for ${type}: ${await io.listDirectories(directoryToList)}`)
  }
}
