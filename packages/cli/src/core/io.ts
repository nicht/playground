import {readdirSync, statSync} from 'fs'
import {pathExists, readFile} from 'fs-extra'
import {homedir} from 'os'
import {join} from 'path'

export default class IO {
  async getPlaygroundPath(): Promise<string> {
    return join(homedir(), '.config', 'playground')
  }

  async getConfigurationFile(): Promise<string> {
    return join(await this.getPlaygroundPath(), 'playground.json')
  }

  async getTemplatesPath(): Promise<string> {
    const configurationFile = await this.readConfiguration()
    const defaultTemplatePath = join(await this.getPlaygroundPath(), 'templates')

    return configurationFile ? configurationFile.templates.path : defaultTemplatePath
  }

  async readConfiguration(): Promise<any> {
    const configurationFile = await this.getConfigurationFile()

    if (await pathExists(configurationFile)) {
      const file = await readFile(configurationFile)
      return JSON.parse(file.toString())
    }

    return null
  }

  async listDirectories(path: string) {
    return readdirSync(path).filter(result => statSync(join(path, result)).isDirectory())
  }
}
