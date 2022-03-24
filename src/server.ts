import express, { Express } from 'express'
import { index } from './controllers/Product'

const port: number = 3000

const server: Express  = express()

server.get('/:id', index)

server.listen(port, (): void => console.log(`Listening on port: ${port}`))
