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
// DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMzYzOTAzYmQtMjVjYy00Y2Y3LTk1ZDAtYWRlYTI1MzQ4MWM0IiwidGVuYW50X2lkIjoiYjRiZDY4OTcyNzAyZGI1ZDQ5M2M0NWZhN2ViZGQyMTMzMDdhOTZjOTFhOTkyYzYzNzA0MWM5Mzg0ZDFjMjNiOCIsImludGVybmFsX3NlY3JldCI6IjQwNTJlOTg4LWQyNTktNGY5My04NzIzLTIxZjYyZmJhMzcwYyJ9.EOuGhDJy9z3VOT473KBjGGL3NM0abLIW5Ue_ZWI4jxc"
//postgresql://neondb_owner:npg_lxXOy1bD2UvH@ep-bitter-haze-a5qi596w-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require