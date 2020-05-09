import {Clone, Cred, Repository} from 'nodegit'

export default class Git {
  options = {
    fetchOpts: {
      callbacks: {
        credentials: (url: any, userName: any) => Cred.sshKeyFromAgent(userName),
        certificateCheck: () => 0,
      },
    },
  }

  async clone(url: string, path: string) {
    await Clone.clone(url, path, this.options)
  }

  async fetch(path: string) {
    await Repository.open(path).then(async repository => {
      await repository.fetchAll(this.options.fetchOpts).then(async () => {
        await repository.mergeBranches('master', 'origin/master')
      })
    })
  }
}
