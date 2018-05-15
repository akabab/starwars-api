const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const characters = require('./api/all.json')

const apiFolderPath = 'api'

const rebuild = async () => {
  await Promise.all(characters.map(c => {
    const filepath = path.join(__dirname, apiFolderPath, 'id', `${c.id}.json`)
    return writeFile(filepath, JSON.stringify(c, null, 2))
  }))
  .catch(console.error)

  console.log('build successful')
}

rebuild()
