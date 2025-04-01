import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRoute } from './handlers/user'
import { postRoute } from './handlers/post'
const app = new Hono()
app.use('/*',cors())
app.route('/api/v1/user', userRoute)
app.route('/api/v1/post',postRoute)
export default app
