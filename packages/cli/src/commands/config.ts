import {Command, flags} from '@oclif/command'
import * as notifier from 'node-notifier'
import IO from '../core/io'
import * as inquirer from 'inquirer'

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
    return inquirer.prompt([
      {
        name: 'repository',
        message: 'New repository URL (GitHub, GitLab, Bitbucket...)',
        default: initialRepository,
      },
      {
        name: 'path',
        message: 'New template path (Full path)',
        default: initialPath,
      },
    ])
  }

  async run() {
    const io = new IO()

    const configContent = await io.readConfiguration()

    const {repository, path} = configContent.templates

    const prompt = await this.generatePrompt(repository, path)

    await io.writeConfiguration({...configContent, templates: {...prompt}})

    notifier.notify({
      title: 'Yay!',
      message: 'Your configuration has been updated!',
    })
  }
}
