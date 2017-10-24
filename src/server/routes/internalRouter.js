import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.get('/simulate-error', (req, res) => {
  throw new Error(simulatedErrMessage)
})

export const simulatedErrMessage = 'Simulated server error from internalRounter'
export default router
