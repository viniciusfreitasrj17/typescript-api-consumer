import express, { Express } from 'express'
import { show } from './controllers/Product'

const port: number = 3000

const server: Express  = express()

server.use(express.urlencoded({ extended: true }));
server.post(`/`, show)

server.listen(port, (): void => console.log(`Listening on port: ${port}`))
