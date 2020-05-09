import {Command, flags} from '@oclif/command'
import {copy, pathExists} from 'fs-extra'
import {join} from 'path'
import IO from '../core/io'
import * as notifier from 'node-notifier'

export default class Init extends Command {
  static description = 'Command that starts a new project from existing templates.'

  static examples = [
    `$ playground init --template=node/api-express
$ playground init --template node/api-express
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    template: flags.string({char: 'p', description: 'Name of the template to be initialized.'}),
  }

  async run() {
    const io = new IO()

    const {flags} = this.parse(Init)

    const template = flags.template || ''

    const currentDirectory = process.cwd()

    const chosenTemplate = await join(await io.getTemplatesPath(), template)

    if (await pathExists(chosenTemplate)) {
      this.log(`Initializing the template in: ${currentDirectory}`)

      const jointCurrentDirectory = join(currentDirectory, template.split('/')[1])
      await copy(chosenTemplate, jointCurrentDirectory)

      return notifier.notify({
        title: 'Horray! Horray!',
        message: 'Your new template was created successfully! Enjoy it well!',
      })
    }

    return notifier.notify({
      title: 'Oh no! :(',
      message: 'It appears that the specified template does not exist.',
    })
  }
}
