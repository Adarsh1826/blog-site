import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
export const postRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SEC:string
    }
}>()
postRoute.use('api/v1/blog/*',async(c,next)=>{
  const header = c.req.header("authhorization") || ""
  const res =  await verify(header,c.env.JWT_SEC)
  if(res.id){
    await next()
  }
  else {return c.json({
    "msg":"Unauthorized access",
  })
}
})

postRoute.post('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
postRoute.put('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
postRoute.post('/api/v1/blog/:id',(c)=>{
    return c.text('Hello')
})
postRoute.get('/',(c)=>{
    return c.text('Hello ji')
})