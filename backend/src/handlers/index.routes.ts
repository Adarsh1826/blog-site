import { Hono } from "hono";
const routes = new Hono()
routes.post('/api/v1/sigup',(c)=>{
    return c.text('Hello')
})
routes.post('/api/v1/sigin',(c)=>{
    return c.text('Hello')
})
routes.post('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
routes.put('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
routes.post('/api/v1/blog/:id',(c)=>{
    return c.text('Hello')
})
export default routes;
