import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import{decode,sign,verify} from "hono/jwt"
const router = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SEC:string
    }
}>()
router.use('api/v1/blog/*',async(c,next)=>{
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
router.post('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
router.put('/api/v1/blog',(c)=>{
    return c.text('Hello')
})
router.post('/api/v1/blog/:id',(c)=>{
    return c.text('Hello')
})
router.get('/',(c)=>{
    return c.text('Hello ji')
})
export default router;
