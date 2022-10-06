import express from 'express'
import cors from 'cors'

import routes from '$routes/index'

const port = 8000

const server = express()

server
  .use(cors({
    origin: '*'
  }))
  .use(routes)
  .listen(port)

console.log(`listening on: http://localhost:${port}`)