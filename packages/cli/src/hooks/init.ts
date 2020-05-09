import {Hook} from '@oclif/config'
import {mkdirp, pathExists, writeFile} from 'fs-extra'
import IO from '../core/io'
import cli from 'cli-ux'

const hook: Hook<'init'> = async function () {
  const io = new IO()

  const playgroundPath = await io.getPlaygroundPath()

  cli.action.start('Checking if is necessary to create a config directory')

  if (!await pathExists(playgroundPath)) {
    cli.action.stop()

    cli.action.start('Creating a new configuration directory for playground')
    await mkdirp(playgroundPath)

    const configFile = await io.getConfigurationFile()
    const templatesDirectory = await io.getTemplatesPath()

    await writeFile(configFile, JSON.stringify({
      version: 1_0_0,
      useOfficialTemplates: true,
      templates: {
        path: templatesDirectory,
        repository: 'https://github.com/nicht/playground-templates',
      },
    }, null, 4))
  }

  cli.action.stop()
}

export default hook
