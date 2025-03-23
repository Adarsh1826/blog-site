import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
