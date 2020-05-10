import {Command, flags} from '@oclif/command'
import * as notifier from 'node-notifier'
import IO from '../core/io'
import {Form} from 'enquirer'

export default class Config extends Command {
  static description = 'Command that starts a new project from existing templates.'

  static examples = [
    `$ playground config
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async generatePrompt(initialRepository: string, initialPath: string) {
    return new Form({
      name: 'configuration',
      message: 'Please provide the following information:',
      choices: [
        {name: 'repository', message: 'Link to the repository (Github, Gitlab)', initial: initialRepository},
        {name: 'path', message: 'Where you want to save the templates', initial: initialPath},
      ],
    })
  }

  async run() {
    const io = new IO()

    const configContent = await io.readConfiguration()

    const {repository, path} = configContent.templates

    const prompt = await this.generatePrompt(repository, path)

    const value = await prompt.run()

    await io.writeConfiguration({...configContent, templates: {...value}})

    notifier.notify({
      title: 'Yay!',
      message: 'Your configuration has been updated!',
    })
  }
}
