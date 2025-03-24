import { Hono } from 'hono'
import router from './handlers/index.routes'
const app = new Hono()
app.route('/', router)
export default app
