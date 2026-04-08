const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')
const fs = require('fs')
const path = require('path')

const dir = '.'
const url = 'https://github.com/tuanasenka-sketch/YuvaOl.git'

async function run() {
  try {
    // 1. Git Init (if not already init)
    try {
      await git.init({ fs, dir })
      console.log('Initialized Git repository.')
    } catch (e) {}

    // 2. Add all files
    const files = await fs.promises.readdir(dir)
    for (const file of files) {
      if (file !== '.git' && file !== 'node_modules') {
        await git.add({ fs, dir, filepath: file })
      }
    }
    console.log('Added all files.')

    // 3. Commit
    const sha = await git.commit({
      fs,
      dir,
      message: 'YuvaOl platform modernization',
      author: {
        name: 'Tuana Senka',
        email: 'tuana@example.com'
      }
    })
    console.log('Committed with SHA:', sha)

  } catch (err) {
    console.error('Error during git process:', err)
  }
}

run()
