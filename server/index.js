const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const cases = require('./mock-data/cases.json')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const getCases = (query) => {
  let result = cases
  if (query.type) {
    result = cases.filter(c => {
      if (c.type.includes(query.type)) {
        return c
      }
    })
  }

  if (query.industry) {
    result = result.filter(c => {
      if (c.industries.includes(query.industry)) {
        return c
      }
    })
  }

  return result
}

app.get('/api/v1/cases', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Cases retrieved successfully',
    cases: getCases(req.query),
    featured: cases[Math.floor(Math.random() * cases.length)]
  })
});

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
