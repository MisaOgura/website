import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import internalRouter, { simulatedErrMessage } from './routes/internalRouter'
import HelloWorld from '../client/components/helloWorld'

const app = express()

app.use('/internal', internalRouter)

app.get('/', (req, res) => {
  const pathToHtml = path.join(__dirname, './views/index.html')
  const template = fs.readFileSync(pathToHtml, 'utf8')
  const renderedHelloWorld = renderToString(<HelloWorld />)
  const page = template.replace('<!-- CONTENT -->', renderedHelloWorld)

  res.status(200).send(page)
})

let server
if (!module.parent) {
  server = app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

app.use((err, req, res, next) => {
  console.error(err.stack)

  if (err.message === simulatedErrMessage) {
    server.close(() => {
      console.log('Server shutting down due to a simulated error...')
    })
  }
})

export default app
