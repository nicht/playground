import {Hook} from '@oclif/config'
import cli from 'cli-ux'
import {pathExists} from 'fs-extra'
import Git from '../core/git'
import IO from '../core/io'

const hook: Hook<'init'> = async function () {
  const io = new IO()
  const git = new Git()

  const playgroundTemplates = await io.getTemplatesPath()
  const configurationContent = await io.readConfiguration()

  cli.action.start('Checking if is necessary to clone the templates for playground')

  if (!await pathExists(playgroundTemplates)) {
    cli.action.stop()

    cli.action.start('Starting to clone the official templates')

    if (configurationContent) {
      const {repository, path} = configurationContent.templates
      await git.clone(repository, path)
    }
  }
  cli.action.stop()
}

export default hook
