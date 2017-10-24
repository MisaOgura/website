import request from 'supertest'
import express from 'express'

import internalRouter, { simulatedErrMessage } from '../routes/internalRouter'

const server = express()
server.use('/internal', internalRouter)

describe('Internal Router', () => {
  describe('when on /internal', () => {
    it('sends status 200', async () => {
      const res = await request(server).get('/internal')
      expect(res.statusCode).toBe(200)
    })
  })

  describe('when on /internal/simulate-error', () => {
    it('simulates app error with status 500', async () => {
      const res = await request(server).get('/internal/simulate-error')

      expect(res.statusCode).toBe(500)
      expect(res.text).toContain(simulatedErrMessage)
    })
  })
})
