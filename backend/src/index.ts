import { Hono } from 'hono'
import { userRoute } from './handlers/user'
import { postRoute } from './handlers/post'
const app = new Hono()
app.route('/api/v1/user', userRoute)
app.route('/api/v1/post',postRoute)
export default app
