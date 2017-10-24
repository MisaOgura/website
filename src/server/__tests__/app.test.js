import request from 'supertest'

import app from '../app'
import internalRouter from '../routes/internalRouter'

describe('App', () => {
  it('renders HelloWorld component', async () => {
    const res = await request(app).get('/')

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain('class="hello-world"')
  })

  describe('when on /internal', () => {
    it('uses internal router', async () => {
      const internalRouterStub = jest.spyOn(internalRouter, 'handle')
      const res = await request(app).get('/internal')

      expect(res.statusCode).toBe(200)
      expect(internalRouterStub).toHaveBeenCalledTimes(1)
    })
  })
})
